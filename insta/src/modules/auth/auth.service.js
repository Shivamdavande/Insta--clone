import User from "../user/user.model.js";
import jwt from 'jsonwebtoken';

export const loginService = async(email, password) => {
    const user = await User.findOne({email})

    if(!user) {
        throw new Error("User not found")
    }

    const isMatch = await user.comparePassword(password)

    if(!isMatch) {
        throw new Error("Invalid password")
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'})

    return {user, token};
}