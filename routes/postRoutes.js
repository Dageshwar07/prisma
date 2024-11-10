import { Router } from "express";
import {
  createPost,
  fetchPosts,
  showPost,
  deletePost,
  searchPost,
} from "../controllers/PostController.js";

const router = Router();

router.get("/getall", fetchPosts);
router.get("/get", searchPost);
router.get("/get/:id", showPost);
router.post("/create", createPost);
// router.put("/:id", updateUser);
router.delete("/delete:id", deletePost);

export default router;