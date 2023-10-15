import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  console.log("movies: ", movies);
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div>
          <MovieCard />
        </div>
      </div>
    </div>
  );
}

export default MovieList;
