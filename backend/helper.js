import { client } from "./index.js";

export async function getAllMovies() {
  console.log("getAllmovies called");
  return await client.db("b30wd").collection("movies").find({}).toArray();
}
