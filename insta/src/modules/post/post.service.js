import post from './post.model.js';

export const createPostService = async (userId, caption, image) => {

    const newPost = new post({
        user: userId,
        caption,
        image
    });

    await newPost.save();

    return newPost;
}