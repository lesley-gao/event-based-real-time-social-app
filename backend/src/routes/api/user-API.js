/**
 * Sets up user-related routes.
 */

import express from "express";
import { deleteUser, getUser } from "../../controllers/user-dao.js";
import { verifyToken } from "../../middleware/verifyToken.js";


const router = express.Router();

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const id = req.params.id;
    const tokenUserId = req.userId;

    if (id !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }
    const deletedUser = await deleteUser(id);
    res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user" });
  }
});

router.get("/:id", verifyToken, async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getUser(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to get user" });
  }
});

export default router;
