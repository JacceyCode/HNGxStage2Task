import { useNavigate } from "react-router-dom";
import { useMovies } from "../services/MovieContext";
import Loader from "./Loader";
import { getMovie } from "../services/apiMovies";

function SearchMovies() {
  const navigate = useNavigate();
  const {
    setSearchedMovie,
    setSearchError,
    setIsLoading,
    isLoading,
    query,
    setQuery,
    // searchError,
  } = useMovies();

  async function searchMovie(e) {
    try {
      e.preventDefault();
      setIsLoading(true);
      setSearchError(false);

      const res = await getMovie(query);
      const { results } = await res.json();
      const result = results.slice(0, 10);
      // console.log(result);
      // if (result.length === 0) throw Error();
      setSearchedMovie(result);
      navigate("/movies");
    } catch {
      // setSearchError(true);
      // throw Error();
    } finally {
      setQuery("");
      setIsLoading(false);
      // console.log(searchError);
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
        // disabled={isLoading}
      />
      <button>
        <img src="/images/Search.png" alt="search-icon" />
      </button>
    </form>
  );
}

export default SearchMovies;
