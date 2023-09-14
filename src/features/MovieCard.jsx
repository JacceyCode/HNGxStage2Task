/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { getDetails, imageUrl } from "../services/apiMovies";
import { useMovies } from "../services/MovieContext";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { setMovieData, setIsLoading } = useMovies();
  const {
    title,
    poster_path: imagePath,
    release_date: date,
    popularity,
    id,
  } = movie;

  async function loadMoviedetail(id) {
    try {
      setIsLoading(true);
      const res = await getDetails(id);
      const data = await res.json();
      setMovieData(data);
      return data;
    } catch {
      // throw Error();
    } finally {
      setIsLoading(false);
      navigate(`/movies/${id}`);
    }
  }

  return (
    <Link
      onClick={() => loadMoviedetail(id)}
      // to={`/movies/${id}`}
      data-testid="movie-card"
      className="mb-14 flex w-80 flex-col items-start gap-3"
    >
      <section className="relative w-full">
        <img
          className="h-96 w-full"
          loading="lazy"
          data-testid="movie-poster"
          src={`${imageUrl}${imagePath}`}
          alt={title}
        />
        {/* <span className="absolute left-4 top-4 rounded-xl bg-gray-200 p-1 text-xs font-bold text-gray-900">
          MOVIE SERIES
        </span> */}
        <button
          className="absolute right-4 top-4 rounded-full bg-white
          duration-300 hover:rotate-180 hover:scale-150 hover:bg-black"
        >
          <img className="w-8" src="./images/Heart.png" alt="heart-icon" />
        </button>
      </section>
      <span
        data-testid="movie-release-date"
        className="w-full text-lg font-medium leading-normal text-gray-600"
      >
        {`Release date: ${date}`}
      </span>
      <h3
        data-testid="movie-title"
        className="w-full text-lg font-bold text-gray-900"
      >
        {title}
      </h3>

      <span className="flex w-full items-center justify-between font-normal">
        <span className="flex items-center gap-2">
          <img src="./images/imdb.png" alt="imdb" /> {popularity.toFixed(2)}
        </span>

        <span className="flex items-center gap-2">
          <img src="./images/rate.png" alt="rate" /> 97%
        </span>
      </span>

      <span className="w-full text-lg font-normal leading-normal text-gray-400">
        Action, Adventure, Horror
      </span>
    </Link>
  );
}

export default MovieCard;
