import { addCommentService, createPostService, getFeedService, toggleLikeService } from "./post.service.js";
import { sendResponse } from '../../utils/response.util.js';
import Post from "./post.model.js";

export const createPost = async (req, res, next) => {
    try {
        const { caption, image } = req.body;

        const userId = req.user._id;

        const post = await createPostService(userId, caption, image);

        sendResponse(res, 201, "post created", post);

    } catch (error) {
        next(error);
    }
}

export const getFeed = async (req, res, next) => {
    try {

        const posts = await getFeedService();

        sendResponse(res, 200, "feed fetched", posts);
    } catch (error) {
        next(error);
    }
}


export const toggleLike = async (req, res, next) => {
    try {
        
        const postId = req.params.postId;
        const userId = req.user._id;

        const post = await toggleLikeService(postId, userId);

        sendResponse(res, 200, "like toggled", post);

    } catch (error) {
        next(error);
        console.log(error)
    }
}

export const addComment = async (req, res, next) => {
    try {
        const postId = req.params.postId;
        const userId = req.user._id;
        const {text} = req.body;

        const post =  await addCommentService(postId, userId, text);

        sendResponse(res, 200, "comment added", post);


    } catch (error) {
        next(error);
    }
}