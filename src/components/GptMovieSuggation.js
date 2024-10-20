import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggation = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames || movieNames.length === 0) {
    return null;
  }
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80 rounded-xl">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index] || []}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggation;
