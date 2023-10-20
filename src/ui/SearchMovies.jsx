import { useNavigate } from "react-router-dom";
import { useMovies } from "../context/MovieContext";
import { getMovie } from "../services/apiMovies";
import { HiOutlineSearch } from "react-icons/hi";

function SearchMovies() {
  const navigate = useNavigate();
  const { setSearchedMovie, setIsLoading, query, setQuery } = useMovies();

  async function searchMovie(e) {
    try {
      e.preventDefault();
      setIsLoading(true);
      const results = await getMovie(query);
      if (!results) throw new Error();
      const result = results.slice(0, 12);
      setSearchedMovie(result);
      if (result) navigate("/movies");
    } catch (err) {
      alert("No results found. Search another movie.");
    } finally {
      setQuery("");
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={searchMovie}
      className="flex w-60 items-center justify-between rounded-md border-2 border-gray-200 p-1 md:w-[33rem] md:p-2"
      method="GET"
    >
      <input
        className="w-full bg-transparent outline-none  placeholder:text-sm placeholder:font-thin placeholder:text-white md:placeholder:text-lg md:placeholder:font-normal"
        type="text"
        placeholder="Search your movie here"
        name="movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <button className="h-6 w-6">
        <HiOutlineSearch />
      </button>
    </form>
  );
}

export default SearchMovies;
