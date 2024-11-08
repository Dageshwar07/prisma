import { Router } from "express";
import {
  createUser,
  updateUser,
  fetchUser,
  showUser,
  deleteUser,

} from "../controllers/UserController.js";

const router = Router();

router.get("/get", fetchUser);
router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.get("/get/:id", showUser);
router.get("/delete/:id", deleteUser);

export default router;