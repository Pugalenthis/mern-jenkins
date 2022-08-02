import { data, getAllMovies } from "../helper.js";
import express from "express";

const router = express.Router();
router.get("/", async (req, res) => {
  res.send(data);
});

export const moviesRouter = router;
