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


export const getFeedService = async () => {

    const posts = await post.find().populate('user', 'username')
        .sort({ createdAt: -1 });

    return posts;
}