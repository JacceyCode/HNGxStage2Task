import { useNavigate } from "react-router-dom";
import { useMovies } from "../services/MovieContext";
import Loader from "./Loader";
import { getMovie } from "../services/apiMovies";

function SearchMovies() {
  const navigate = useNavigate();
  const { setSearchedMovie, setIsLoading, isLoading, query, setQuery } =
    useMovies();

  async function searchMovie(e) {
    try {
      e.preventDefault();
      setIsLoading(true);
      const res = await getMovie(query);
      if (!res.ok) throw new Error();
      const { results } = await res.json();
      const result = results.slice(0, 10);
      setSearchedMovie(result);
      navigate("/movies");
    } catch (err) {
      throw new Error();
    } finally {
      setQuery("");
      setIsLoading(false);
    }
  }

  if (isLoading) <Loader />;

  return (
    <form
      onSubmit={searchMovie}
      className="flex w-60 items-center justify-between rounded-md border-2 border-gray-200 py-2 md:w-[33rem] md:px-2"
      method="GET"
    >
      <input
        className="flex bg-transparent pl-2 outline-none placeholder:font-thin placeholder:text-white md:pl-4 md:placeholder:font-normal"
        type="text"
        placeholder="What do you want to watch?"
        name="movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
        // disabled={isLoading}
      />
      <button className="pr-2">
        <img src="/images/Search.png" alt="search-icon" />
      </button>
    </form>
  );
}

export default SearchMovies;
