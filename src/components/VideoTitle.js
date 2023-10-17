import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="pt-[15%] px-[3%] absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="w-2/4">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black p-3 px-12 text-lg rounded-lg hover:bg-opacity-70">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white p-3 px-12 text-lg rounded-lg hover:bg-opacity-70 mx-2 ">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
