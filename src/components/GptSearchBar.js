import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

function GptSearchBar() {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="py-[8%] flex justify-center">
      <form className="w-1/2 p-2 m-0 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="px-10 py-2 col-span-9"
        />
        <button className="ml-6 rounded-md bg-red-600 text-white py-2 px-6 col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
