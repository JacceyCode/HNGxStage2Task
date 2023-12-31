/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHeart } from "react-icons/fa6";
import { GiTomato } from "react-icons/gi";
import { imageUrl } from "../services/apiMovies";
import { HiPlayCircle } from "react-icons/hi2";
import { useState } from "react";

function MovieCard({ movie }) {
  const [favourite, setFavourite] = useState(false);
  const color = favourite ? "red-700" : "white";

  const {
    title,
    poster_path: imagePath,
    release_date: date,
    popularity,
    id,
    vote_average: avg,
  } = movie;

  const utcYear = new Date(date).getUTCFullYear();

  return (
    <section
      data-testid="movie-card"
      className="mx-auto flex flex-col items-start gap-4"
    >
      {imagePath ? (
        <section className="relative flex h-[30rem] w-full lg:h-[22rem] xl:h-[27rem]">
          <img
            className="rounded-lg"
            loading="lazy"
            data-testid="movie-poster"
            src={`${imageUrl}${imagePath}`}
            alt={title}
          />

          <button
            onClick={() => setFavourite((add) => !add)}
            className={`absolute right-1 m-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-600/90 text-xl text-${color} transition-all hover:scale-125`}
          >
            <FaHeart />
          </button>

          <Link
            to={`/movies/${id}`}
            className="absolute -bottom-4 right-0 flex w-full items-center justify-center gap-1 rounded-md bg-rose-700 px-[0.3rem] py-2 text-white"
          >
            <HiPlayCircle />
            <span className="text-sm font-bold">Watch trailer</span>
          </Link>
        </section>
      ) : (
        <span
          data-testid="movie-poster"
          className="flex h-[30rem] w-full flex-col items-center justify-center rounded-lg border-2 border-red-400 p-4 text-center font-serif text-2xl font-extrabold lg:h-[22rem] xl:h-[27rem]"
        >
          <span>🚫</span> Sorry, no image was found.
        </span>
      )}

      <section className="flex w-full flex-col gap-2">
        <span
          data-testid="movie-release-date"
          className="w-full text-lg font-medium leading-normal text-gray-600/50"
        >
          {utcYear}
        </span>

        <h3
          data-testid="movie-title"
          className="w-full text-lg font-bold text-gray-900"
        >
          {title}
        </h3>

        <span className="flex w-full items-center justify-between font-normal">
          <span className="flex items-center gap-2">
            <img src="./images/imdb.png" alt="imdb" />
            {`${(avg * 10).toFixed(1)} / 100`}
          </span>

          <span className="flex items-center gap-1">
            <IconContext.Provider value={{ color: "red", size: "20px" }}>
              <GiTomato />
            </IconContext.Provider>
            {`${Math.trunc(popularity)}%`}
          </span>
        </span>
        <span className="w-full text-lg font-normal leading-normal text-gray-400">
          Action, Adventure, Horror
        </span>
      </section>
    </section>
  );
}

export default MovieCard;
