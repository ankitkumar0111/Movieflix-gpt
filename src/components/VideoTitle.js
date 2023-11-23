import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-transparent">
      <h1 className=" text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-3 px-10 text-xl hover:bg-opacity-80  rounded-lg">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-600 text-white p-3 px-9 text-xl hover:bg-opacity-40 rounded-lg">
           More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
