/**
 * User controllers handling CRUD operations.
 */

import User from "../models/Users-schema.js";


//Get single user
export const getUser = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error(`Error while get user by ID:${err.message}`);
  }
};

//Delete user
export const deleteUser = async (id) => {
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  } catch (err) {
    console.log(err);
    throw new Error(`Error while deleting a user: ${err.message}`);
  }
};
