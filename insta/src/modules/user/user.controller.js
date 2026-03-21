import User from "./user.model.js";
import { sendResponse } from "../../utils/response.util.js";

export const createUser = async(req, res, next) => {
    try {
        const { name, username, email, password } = req.body;

        const existingUser = await User.findOne({
            $or: [ {email} , {username}]

        })
        
        if(existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        const user = new User({
            name,
            username,
            email,
            password
        })

        await user.save();

        const userobj = user.toObject();
        delete userobj.password;

        sendResponse(res, 201, "User created successfully", user);
        
    } catch (error) {
        next(error);
    }
}