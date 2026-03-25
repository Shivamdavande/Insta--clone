import express from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { createPost, getFeed } from "./post.controller.js";


const router = express.Router();

router.post("/create", authMiddleware, createPost);
router.get("/feed", authMiddleware, getFeed);

export default router;