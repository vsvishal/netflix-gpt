import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="pt-[25%] md:pt-[15%] px-[3%] absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className=" text-2xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="hidden md:inline-block w-2/4">{overview}</p>
      <div className="my-2 md:my-6">
        <button className="bg-white text-black md:p-3 p-2 md:px-12 px-4 md:text-lg text-base rounded-lg hover:bg-opacity-70">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white md:p-3 p-2 md:px-12 px-4 md:text-lg text-base rounded-lg hover:bg-opacity-70 mx-2 ">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
