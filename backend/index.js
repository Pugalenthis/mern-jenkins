import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { moviesRouter } from "./routes/movies.js";

const app = express();

//middleware --> intercept --> converting body to json

app.use(express.json());

app.use(cors());

app.use("/movies", moviesRouter);

// const MONGO_URL = "mongodb://localhost";

//GET METHOD  - read

// find gives cursor - cursor means  pagination
//to convert into array we have toArray (method) to array gives everything.

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server is started in ${PORT}`));
