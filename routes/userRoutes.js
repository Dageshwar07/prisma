import express, { Router } from "express";
import { createUser } from "../controllers/UserController.js";
const router = express.Router()
router.post("/create",createUser)
export default router