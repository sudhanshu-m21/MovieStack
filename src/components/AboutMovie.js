import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const AboutMovie = () => {
  const { id } = useParams();
  const [aboutMovie, setAboutMovie] = useState();
  async function findMovie() {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      setAboutMovie(json);
      //   console.log(json);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  }
  useEffect(() => {
    findMovie();
  }, [id]);
  return !aboutMovie ? (
    <Shimmer />
  ) : (
    <div className="bg-gradient-to-b from-grey-600 to-blue-800 min-h-screen text-black">
      <div className="max-w-7xl mx-auto p-8 space-y-12">
        {/* Title */}
        <h1 className="text-6xl font-extrabold text-center text-yellow-800">
          {aboutMovie.title}
        </h1>

        {/* Poster */}
        {aboutMovie.backdrop_path && (
          <div
            className="h-[400px] bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${IMG_CDN_URL + aboutMovie.backdrop_path})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end">
              <div className="p-6">
                <h1 className="text-5xl font-bold text-yellow-400">
                  {aboutMovie.title}
                </h1>
                <p className="italic text-yellow-300">{aboutMovie.tagline}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <img
            src={IMG_CDN_URL + aboutMovie.poster_path}
            alt={aboutMovie.title}
            className="w-full max-w-sm rounded-lg shadow-2xl hover:scale-105 transform transition duration-500"
          />
        </div>

        {/* Overview */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-yellow-800">Overview</h2>
          <p className="text-lg max-w-2xl mx-auto mt-4 text-black">
            {aboutMovie.overview}
          </p>
        </div>

        {/* Rating */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          <div className="flex items-center">
            <span className="text-yellow-400 text-3xl">⭐</span>
            <p className="ml-2 text-2xl">
              {aboutMovie.vote_average.toFixed(1)} / 10
            </p>
          </div>
          <p className="text-sm text-gray-400">
            ({aboutMovie.vote_count.toLocaleString()} votes)
          </p>
        </div>

        {/* Details List */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-xl mt-8">
          <h2 className="text-2xl font-semibold text-center text-yellow-300 mb-4">
            Movie Details
          </h2>
          <ul className="space-y-4 text-lg">
            <li>
              <strong className="text-yellow-400">Tagline:</strong>{" "}
              <em className="text-gray-300">{aboutMovie.tagline}</em>
            </li>
            <li>
              <strong className="text-yellow-400">Release Date:</strong>{" "}
              <span className="text-gray-300">{aboutMovie.release_date}</span>
            </li>
            <li>
              <strong className="text-yellow-400">Runtime:</strong>{" "}
              <span className="text-gray-300">{aboutMovie.runtime} mins</span>
            </li>
            <li>
              <strong className="text-yellow-400">Language:</strong>{" "}
              <span className="text-gray-300">
                {aboutMovie.original_language.toUpperCase()}
              </span>
            </li>
            <li>
              <strong className="text-yellow-400">Status:</strong>{" "}
              <span className="text-gray-300">{aboutMovie.status}</span>
            </li>
            <li>
              <strong className="text-yellow-400">Budget:</strong>{" "}
              <span className="text-gray-300">
                ${aboutMovie.budget.toLocaleString()}
              </span>
            </li>
            <li>
              <strong className="text-yellow-400">Revenue:</strong>{" "}
              <span className="text-gray-300">
                ${aboutMovie.revenue.toLocaleString()}
              </span>
            </li>
            <li>
              <strong className="text-yellow-400">Genres:</strong>{" "}
              <span className="text-gray-300">
                {aboutMovie.genres.map((g) => g.name).join(", ")}
              </span>
            </li>
            <li>
              <strong className="text-yellow-400">Origin Country:</strong>{" "}
              <span className="text-gray-300">
                {aboutMovie.origin_country.join(", ")}
              </span>
            </li>
            {aboutMovie.homepage && (
              <li>
                <strong className="text-yellow-400">Homepage:</strong>{" "}
                <a
                  href={aboutMovie.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Visit Official Site
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Production Companies */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
            Production Companies
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {aboutMovie.production_companies.map((company) => (
              <div key={company.id} className="w-32 text-center">
                <img
                  src={IMG_CDN_URL + company.logo_path}
                  alt={company.name}
                  className="max-h-20 mx-auto object-contain"
                />
                {/* <p className="text-black mt-2">{company.name}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMovie;
