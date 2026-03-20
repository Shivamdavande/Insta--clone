import app from './src/app.js';
import dotenv from "dotenv";
import { logger } from "./src/utils/logger.js";
import { connectDB } from './src/config/db.js';
dotenv.config();


const PORT = process.env.PORT || 5000;
logger("Server started");
connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})