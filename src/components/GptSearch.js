import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import bgImage from "../images/netflix-background.jpg";

function GptSearch() {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={bgImage} alt="backaground" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
}

export default GptSearch;
