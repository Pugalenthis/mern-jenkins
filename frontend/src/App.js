import logo from "./logo.svg";
import "./App.css";
import { Movie } from "./movies";
import { useState, useEffect } from "react";
import { API } from "./api";

function App() {
  const [copymovie, SetMovies] = useState("");

  const getmovies = (movieid) => {
    fetch(`${API}movies`, { method: "GET" })
      .then((data) => data.json())
      .then((res) => SetMovies(res));
  };

  useEffect(() => getmovies(), []);

  return (
    <div className="App">
      {copymovie == "" ? (
        <h1>loading</h1>
      ) : (
        copymovie.map((movie) => (
          <Movie
            poster={movie.poster}
            name={movie.name}
            rating={movie.rating}
            summary={movie.summary}
            id={movie.id}
            movieid={movie._id}
          />
        ))
      )}
      <Movie />
    </div>
  );
}

export default App;
