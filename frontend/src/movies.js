import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API } from "./api.js";

export function Movie({ poster, name, rating, summary, id, movieid }) {
  const [like, setlike] = useState(0);
  const [dislike, dellike] = useState(0);

  const [show, setshow] = useState(false);
  // const summarystyles ={
  //     display : show  ? "block": "none",
  //
  const history = useHistory();

  const [copymovie, SetMovies] = useState([]);

  const getmovies = (movieid) => {
    fetch(`${API}`, { method: "GET" })
      .then((data) => data.json())
      .then((res) => SetMovies(res));
  };

  useEffect(() => getmovies(), []);

  return (
    <div>
      <h1>{name}</h1>
      <h5>{rating}</h5>
      <img src={poster} alt="" />
      <p>{summary}</p>
    </div>
  );
}
