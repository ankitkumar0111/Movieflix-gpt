import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen mt-12 md:mt-0 aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-transparent">
      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-2 md:my-0">
        <button className=" bg-white text-black py-0.5 md:p-3 px-1 md:px-9 text-md md:text-xl hover:bg-opacity-80  rounded-lg">
          ▶ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-600 text-white p-3 px-9 text-xl hover:bg-opacity-40 rounded-lg">
           More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
