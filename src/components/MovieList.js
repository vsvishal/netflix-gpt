import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  console.log("movies MovieList: ", movies);

  if (!movies) return;
  return (
    <div className="py-2 px-[3%]">
      <h1 className="text-xl font-bold py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
