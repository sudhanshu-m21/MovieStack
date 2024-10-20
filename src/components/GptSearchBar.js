import React, { useRef } from "react";
import lang from "../utils/languageConstatnt";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/open_AI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.lang.lang);
  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    const model = openai.getGenerativeModel({ model: "gemini-pro" });
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me the names of 5 movies in array of strings format.";
    const gptResult = await model.generateContent(gptQuery);
    const movies = JSON.parse(
      gptResult?.response?.candidates[0]?.content?.parts[0].text || "[]"
    );
    const data = movies.map((movie) => searchMovie(movie));
    const tmdbResults = await Promise.all(data);
    // console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: movies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 p-4 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
