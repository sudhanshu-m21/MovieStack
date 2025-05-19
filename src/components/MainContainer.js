import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="w-full bg-black relative aspect-video">
      <VideoBackground movieId={id} />
      <div className="absolute top-0 left-0 w-full h-full flex items-center bg-gradient-to-r from-black via-transparent to-black">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};
// <div className="w-screen pt-[30%] bg-black md:pt-0">
//   <VideoTitle title={original_title} overview={overview} />
//   <VideoBackground movieId={id} />
// </div>

export default MainContainer;
