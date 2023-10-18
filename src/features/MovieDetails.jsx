/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import { getMovieDetails, getMovieTrailer } from "../services/apiMovies";
import MovieOverview from "./MovieOverview";
import PlayVideo from "./PlayVideo";

function MovieDetails({ id }) {
  const { setMovieData, setSearchError, setTrailerKey, setIsLoading } =
    useMovies();

  useEffect(
    function () {
      async function loadMovieDetail(id) {
        setIsLoading(true);
        try {
          setSearchError(false);
          setTrailerKey("");
          setMovieData("");
          const data = await getMovieDetails(id);
          const key = await getMovieTrailer(id);
          setMovieData(data);
          setTrailerKey(key);
          // return data;
        } catch (err) {
          setSearchError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      loadMovieDetail(id);
    },
    [id, setIsLoading, setMovieData, setSearchError, setTrailerKey],
  );

  return (
    <main className="flex w-full flex-col gap-6 p-2 lg:p-8 lg:pl-60">
      <PlayVideo />
      <MovieOverview />
    </main>
  );
}

export default MovieDetails;
