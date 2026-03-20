import User from "./user.model.js";
import { sendResponse } from "../../utils/response.util.js";

export const createUser = async(req, res, next) => {
    try {
        const { name, username, email, password } = req.body;
        
        const user = new User({
            name,
            username,
            email,
            password
        })

        sendResponse(res, 201, "User created successfully", user);
        
    } catch (error) {
        next(error);
    }
}