import { createPostService } from "./post.service.js";
import {sendResponse} from '../../utils/response.util.js';


export const createPost =  async (req, res, next) => {
    try {
        const {caption, image} = req.body;

        const userId = req.user._id;

        const post = await createPostService(userId, caption, image);

        sendResponse(res, 201, "post created", post);
        
    } catch (error) {
        next(error);
    }
}