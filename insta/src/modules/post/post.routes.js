import express from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { createPost } from "./post.controller.js";


const router = express.Router();

router.post("/create", authMiddleware, createPost);

export default router;