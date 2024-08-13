import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes';
dotenv.config();

const app :Application = express();

app.use(cors());
app.use(express.json());
app.use("/api",router);

export default app;
