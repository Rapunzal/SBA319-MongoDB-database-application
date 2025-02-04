import express from "express";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

//Get list of all users route
router.get("/", getUsers);

//Add user route
router.post("/", addUser);

//Update user route
router.put("/:id", updateUser);

//Delete user route
router.delete("/:id", deleteUser);

export default router;
