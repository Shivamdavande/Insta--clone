import { sendResponse } from "../../utils/response.util.js";
import { loginService } from "./auth.service.js";


export const loginUser = async(req, res, next) => {
    try {
        const { email, password } = req.body;

        const data = await loginService(email, password)
        console.log(data);

        const userobj = data.user.toObject();
        delete userobj.password;

        sendResponse(res, 200, "login succcessfully", { user: userobj, token: data.token });

    } catch (error) {
        next(error);
    }
}