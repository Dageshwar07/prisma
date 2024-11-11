import { Router } from "express";
import {
  createComment,
  fetchComments,
  showComment,
  deleteComment,
} from "../controllers/CommentController.js";

const router = Router();

router.get("/getAll", fetchComments);
router.get("/get/:id", showComment);
router.post("create/", createComment);
// router.put("/:id", updateUser);
router.delete("/delete/:id", deleteComment);
export default router