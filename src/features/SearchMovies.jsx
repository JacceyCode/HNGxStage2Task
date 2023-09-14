/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { useMovies } from "../services/MovieContext";
import Loader from "../ui/Loader";
// import { API_KEY, SEARCH_API } from "../services/apiMovies";

function SearchMovies() {
  const navigate = useNavigate();
  const { setSearchedMovie, setIsLoading, isLoading, query, setQuery } =
    useMovies();

  async function searchMovie(e) {
    try {
      e.preventDefault();
      setIsLoading(true);

      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=f8c9f15540c3d9bc108d47c338257a05&query=${query}`,
      );
      const { results } = await res.json();
      const result = results.slice(0, 10);
      setSearchedMovie(result);
      navigate("/movies");
    } catch {
      // throw Error();
    } finally {
      setQuery("");
      setIsLoading(false);
    }
  }

  if (isLoading) <Loader />;

  return (
    <form
      onSubmit={searchMovie}
      className="flex w-[33rem] items-center justify-between rounded-md border-2 border-gray-200 px-2 py-2"
      method="GET"
    >
      <input
        className="flex-grow bg-transparent pl-4 outline-none placeholder:font-normal placeholder:text-white"
        type="text"
        placeholder="What do you want to watch?"
        name="movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
        disabled={isLoading}
      />
      <button>
        <img src="/images/Search.png" alt="search-icon" />
      </button>
    </form>
  );
}

export default SearchMovies;
