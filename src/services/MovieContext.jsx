/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { API, API_KEY } from "./apiMovies";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [movieData, setMovieData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(function () {
    async function loadMovies() {
      const res = await fetch(`${API}${API_KEY}`);
      const { results } = await res.json();
      const topResults = results.slice(0, 10);
      setPopularMovies(topResults);
    }
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
    throw new Error("MovieContext was used outside of the MpvieProvider");
  return context;
}

export { MovieProvider, useMovies };