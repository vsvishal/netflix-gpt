import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { options } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

function GptSearchBar() {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Dhamaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults?.choices?.[0].message?.content.split(",");
    console.log("gptMovies ", gptMovies);
    searchMovieTMDB(gptMovies[0]);

    const getAllPromises = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(getAllPromises);
    dispatch(
      addGptMovies({ gptMoviesName: gptMovies, tmdbMovies: tmdbResults })
    );

    console.log("tmdbResults ", tmdbResults);
  };

  return (
    <div className="py-[8%] flex justify-center">
      <form
        className="w-1/2 p-2 m-0 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="px-10 py-2 col-span-9"
          ref={searchText}
        />
        <button
          className="ml-6 rounded-md bg-red-600 text-white py-2 px-6 col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
