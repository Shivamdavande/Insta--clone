import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/error.middleware.js';
import userRouter from './modules/user/user.routes.js';


const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler)

app.use("/api/user", userRouter );


app.get('/', (req, res) => {
    res.send('kee haal mitrooo...');
});

export default app;