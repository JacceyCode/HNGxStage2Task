/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import { getMovieDetails, getMovieTrailer } from "../services/apiMovies";
// import Loader from "../features/Loader";

import MovieOverview from "./MovieOverview";
import PlayVideo from "./PlayVideo";

function MovieDetails({ id }) {
  const { setMovieData, movieData, setTrailerKey, setIsLoading } = useMovies();

  useEffect(
    function () {
      async function loadMovieDetail(id) {
        try {
          setIsLoading(true);
          const data = await getMovieDetails(id);
          const key = await getMovieTrailer(id);
          console.log(key);
          console.log(data);
          setMovieData(data);
          setTrailerKey(key);
          // return data;
        } catch (err) {
          alert(err);
          // throw new Error(err.status_message);
        } finally {
          setIsLoading(false);
        }
      }
      loadMovieDetail(id);
    },
    [id, setIsLoading, setMovieData, setTrailerKey],
  );

  console.log(movieData);

  return (
    <main className="flex w-full flex-col gap-6 p-2 lg:p-8 lg:pl-60">
      <PlayVideo />
      <MovieOverview />
    </main>
  );
}

export default MovieDetails;
