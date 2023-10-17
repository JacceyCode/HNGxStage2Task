/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHeart } from "react-icons/fa6";
import { GiTomato } from "react-icons/gi";
import { getMovieDetails, imageUrl } from "../services/apiMovies";
// import { useMovies } from "../context/MovieContext";

function MovieCard({ movie }) {
  // const navigate = useNavigate();
  // const { setMovieData, setIsLoading } = useMovies();
  const {
    title,
    poster_path: imagePath,
    release_date: date,
    popularity,
    id,
    vote_average: avg,
  } = movie;

  const utcYear = new Date(date).getUTCFullYear();

  // async function loadMoviedetail(id) {
  //   try {
  //     setIsLoading(true);
  //     const res = await getMovieDetails(id);
  //     console.log(res);
  //     // if (!res.ok) throw new Error();
  //     const data = await res.json();
  //     console.log(data);
  //     setMovieData(data);
  //     navigate(`/movies/${id}`);
  //     return data;
  //   } catch (err) {
  //     alert(err.status_message);
  //     // throw new Error(err.status_message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  return (
    <Link
      // onClick={() => loadMoviedetail(id)}
      to={`/movies/${id}`}
      data-testid="movie-card"
      className="flex flex-col items-start gap-2"
    >
      {imagePath ? (
        <section className="relative flex h-[30rem] w-full lg:h-[22rem] xl:h-[27rem]">
          <img
            className=""
            loading="lazy"
            data-testid="movie-poster"
            src={`${imageUrl}${imagePath}`}
            alt={title}
          />

          <button className="absolute right-1 m-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-600/90 text-xl text-stone-50/80 transition-all hover:scale-125">
            <FaHeart />
          </button>
        </section>
      ) : (
        <span
          data-testid="movie-poster"
          className="flex h-[30rem] w-full flex-col items-center justify-center border-2 border-red-400 p-4 text-center font-serif text-2xl font-extrabold lg:h-[22rem] xl:h-[27rem]"
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
            <IconContext.Provider value={{ color: "orangered", size: "20px" }}>
              <GiTomato />
            </IconContext.Provider>
            {`${Math.trunc(popularity)}%`}
          </span>
        </span>
        <span className="w-full text-lg font-normal leading-normal text-gray-400">
          Action, Adventure, Horror
        </span>
      </section>
    </Link>
  );
}

export default MovieCard;
