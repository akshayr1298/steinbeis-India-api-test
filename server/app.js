import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import helmet from "helmet";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from './routes/userroutes.js'
import productRouter from './routes/productroutes.js'
dotenv.config();

const app = express();

mongoose
  .connect("mongodb://localhost:27017/steinbies-api-test")
  .then((data, error) => {
    if (error) {
      console.log(`database not connected  ${error}`);
    } else {
      console.log("database connected");
    }
  });

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("server is running");
});


app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

// error handling
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500).json({ error: { message: error.message } });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
