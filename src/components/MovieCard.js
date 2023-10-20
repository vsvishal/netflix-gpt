import React from "react";
import { IMG_CDN } from "../utils/constants";

function MovieCard({ posterPath }) {
  if (!posterPath) return;

  return (
    <div className="w-32 md:w-40 pr-3">
      <img alt="movie poster" src={IMG_CDN + posterPath} />
    </div>
  );
}

export default MovieCard;
