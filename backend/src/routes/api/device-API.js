/**
 * Defines routes for managing notification tokens
 */

import express from "express";
import {createToken, deleteToken, queryToken} from "../../controllers/device-dao.js";
import {verifyToken} from "../../middleware/verifyToken.js";

import {registerToken, unregisterToken} from "../../messaging.js";
import {getUser} from "../../controllers/user-dao.js";


const router = express.Router();

router.post('/', verifyToken, async (req, res) => {
    try {
        const {token, location} = req.body;
        const newToken = await createToken({token, location, userId: req.userId});
        const user = await getUser(req.userId);
        registerToken(token, user.tags);
        res.status(201).json(newToken);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.delete('/', verifyToken, async (req, res) => {
    try {
        const {token} = req.body;
        const deletedToken = await deleteToken({token, userId: req.userId});
        if (!deletedToken) {
            res.status(404).json({message: 'Token not found'});
        } else {
            unregisterToken(token)
            res.json({message: 'Token deleted successfully'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.post('/query', verifyToken, async (req, res) => {
    try {
        const {token} = req.body;
        const foundToken = await queryToken(token);
        if (!foundToken) {
            res.status(204).send();
        } else {
            res.status(200).json(foundToken);
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default router;
