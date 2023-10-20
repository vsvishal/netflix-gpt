import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import bgImage from "../images/netflix-background.jpg";

function GptSearch() {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="md:h-auto h-screen object-cover"
          src={bgImage}
          alt="backaground"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
}

export default GptSearch;
