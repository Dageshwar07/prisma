import { Router } from "express";
import {
  createPost,
  fetchPosts,
  showPost,
  deletePost,
  searchPost,
} from "../controllers/PostController.js";

const router = Router();

router.get("/", fetchPosts);
router.get("/search", searchPost);
router.get("/:id", showPost);
router.post("/", createPost);
// router.put("/:id", updateUser);
router.delete("/:id", deletePost);

export default router;