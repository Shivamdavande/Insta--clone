import express from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { addComment, createPost, getFeed, toggleLike } from "./post.controller.js";


const router = express.Router();

router.post("/create", authMiddleware, createPost);
router.get("/feed", authMiddleware, getFeed);
router.post("/like/:postId", authMiddleware, toggleLike)
router.post('/comment/:postId', authMiddleware, addComment)

export default router;