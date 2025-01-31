import "dotenv/config";
import express from "express";
import { getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
