import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
app.use(cors("http://43.205.112.163"))
import { data } from "./helper.js";


const app = express();

//middleware --> intercept --> converting body to json



const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server is started in ${PORT}`));

app.get("/", async (req, res) => {
  res.send(data);
});

// const MONGO_URL = "mongodb://localhost";

//GET METHOD  - read

// find gives cursor - cursor means  pagination
//to convert into array we have toArray (method) to array gives everything.
