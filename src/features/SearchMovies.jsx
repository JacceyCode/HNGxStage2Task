import { useNavigate } from "react-router-dom";
import { useMovies } from "../services/MovieContext";
import Loader from "./Loader";
import { getMovie } from "../services/apiMovies";
import { HiOutlineSearch } from "react-icons/hi";

function SearchMovies() {
  const navigate = useNavigate();
  const { setSearchedMovie, setIsLoading, isLoading, query, setQuery } =
    useMovies();

  async function searchMovie(e) {
    try {
      e.preventDefault();
      setIsLoading(true);
      const res = await getMovie(query);
      if (!res.ok) throw new Error("Sorry, Movie not found!");
      const { results } = await res.json();
      const result = results.slice(0, 10);
      setSearchedMovie(result);
      navigate("/movies");
    } catch (err) {
      throw new Error(err.message);
    } finally {
      setQuery("");
      setIsLoading(false);
    }
  }

  if (isLoading) <Loader />;

  return (
    <form
      onSubmit={searchMovie}
      className="flex w-60 items-center justify-between rounded-md border-2 border-gray-200 p-1 md:w-[33rem] md:p-2"
      method="GET"
    >
      <input
        className="w-full bg-transparent outline-none  placeholder:text-sm placeholder:font-thin placeholder:text-white md:placeholder:text-lg md:placeholder:font-normal"
        type="text"
        placeholder="Search your movie"
        name="movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
        disabled={isLoading}
      />
      <button className="h-6 w-6">
        <HiOutlineSearch />
      </button>
    </form>
  );
}

export default SearchMovies;
