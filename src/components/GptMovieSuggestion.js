import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GptMovieSuggestion() {
  const { gptMoviesName, tmdbMovies } = useSelector((store) => store.gpt);

  if (!gptMoviesName) return;

  return (
    <div className="bg-black text-white p-4 mx-4 mt-[-37%] md:mt-[-7%] bg-opacity-80">
      {gptMoviesName.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={tmdbMovies[index]}
        />
      ))}
    </div>
  );
}

export default GptMovieSuggestion;
