import { text } from 'express';
import Post from './post.model.js';


export const createPostService = async (userId, caption, image) => {

    const newPost = new post({
        user: userId,
        caption,
        image
    });

    await newPost.save();

    return newPost;
}


export const getFeedService = async () => {

    const posts = await post.find().populate('user', 'username')
        .sort({ createdAt: -1 });

    return posts;
}


export const toggleLikeService = async (postId, userId) => {

    const post = await Post.findById(postId);

    if (!post) {
        throw new Error('Post not found');
    }

    const alreadyLiked = post.likes.some(
        (id) => id.toString() === userId.toString()
    );

    if (alreadyLiked) {
        post.likes = post.likes.filter(
            (id) => id.toString() !== userId.toString()
        ) ;
    }else {
        post.likes.push(userId);
    }

    await post.save();

    return post;
}

export const addCommentService = async (postId, userId, text) => {

    const post = await Post.findById(postId);

    if(!post) {
        throw new Error('Post not found');
    }

    const comment = {
        user: userId,
        text
    }

    post.comments.push(comment);

    await post.save();

    return post;
}