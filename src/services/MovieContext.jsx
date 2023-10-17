/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { getPopularMovies } from "./apiMovies";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [movieData, setMovieData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [searchError, setSearchError] = useState("");

  useEffect(function () {
    async function loadMovies() {
      setIsLoading(true);
      const res = await getPopularMovies();
      const { results } = await res.json();
      const topResults = results.slice(0, 12);
      console.log(topResults);
      setPopularMovies(topResults);
    }
    setIsLoading(false);
    loadMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        popularMovies,
        searchedMovie,
        movieData,
        isLoading,
        query,
        searchError,
        setSearchError,
        setQuery,
        setIsLoading,
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
