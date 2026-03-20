import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        let res = await mongoose.connect(process.env.MONGO_URI)
        if(res) {
            console.log('MongoDB connected successfully');
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}