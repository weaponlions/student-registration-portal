import express from 'express';
import { connectToDataBase } from './Database.js';
import cors from "cors";
import multer from 'multer';
import authRoute from './router/Auth.js';
import courseRoute from './router/Course.js';

const app = express();
const PORT = 5000;  


connectToDataBase();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/course", multer().array() , courseRoute)


app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});
