import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <button
        onClick={scrollLeft}
        className="absolute left-15 z-10 bg-transparent text-white text-2xl hover:scale-125 duration-150"
      >
        ⬅
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-6 z-10 bg-transparent text-white text-2xl hover:scale-125 duration-150"
      >
        ➡
      </button>
      <div className="flex overflow-x-auto scrollbar-hidden" ref={scrollRef}>
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
