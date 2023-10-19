/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { getPopularMovies } from "../services/apiMovies";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [movieData, setMovieData] = useState();
  const [trailerKey, setTrailerKey] = useState();
  const [isLoading, setIsLoading] = useState();
  const [query, setQuery] = useState("");
  const [searchError, setSearchError] = useState();
  const [error, setError] = useState();
  const [openNav, setOpenNav] = useState(false);

  useEffect(function () {
    async function loadMovies() {
      try {
        setError(false);
        setIsLoading(true);
        const results = await getPopularMovies();
        if (!results) throw new Error();
        const topResults = results.slice(0, 12);
        setPopularMovies(topResults);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        popularMovies,
        searchedMovie,
        movieData,
        trailerKey,
        isLoading,
        query,
        error,
        setError,
        searchError,
        openNav,
        setOpenNav,
        setSearchError,
        setQuery,
        setIsLoading,
        setTrailerKey,
        setMovieData,
        setPopularMovies,
        setSearchedMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MovieContext);
  if (context === undefined)
    throw new Error("MovieContext was used outside of the MovieProvider");
  return context;
}

export { MovieProvider, useMovies };
