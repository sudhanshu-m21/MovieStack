import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggation from "./GptMovieSuggation";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_URL}
          alt="Baground"
          className="h-screen md:h-auto object-cover md:object-none"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggation />
      </div>
    </>
  );
};

export default GptSearch;
