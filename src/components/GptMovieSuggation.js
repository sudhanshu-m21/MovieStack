import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Spinner from "./Shimmer";

const GptMovieSuggation = () => {
  const { movieNames, movieResults, searchButtonClicked } = useSelector(
    (store) => store.gpt
  );
  return searchButtonClicked ? (
    <Spinner />
  ) : movieNames?.length ? (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80 rounded-xl">
      <div>
        {movieNames?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index] || []}
          />
        ))}
      </div>
    </div>
  ) : null;
};

export default GptMovieSuggation;
