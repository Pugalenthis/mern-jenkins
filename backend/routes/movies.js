import { getAllMovies } from "../helper.js";
import express from "express";

const router = express.Router();
router.get("/", async (req, res) => {
  console.log("pugal");
  const movie = await getAllMovies();
  res.send(movie);

  console.log(movie);
});

export const moviesRouter = router;
