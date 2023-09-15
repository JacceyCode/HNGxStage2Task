import { Link } from "react-router-dom";
import MovieCard from "../features/MovieCard";
import { useMovies } from "../services/MovieContext";
import SideNav from "../features/SideNav";
import SearchMovies from "../features/SearchMovies";
import Menu from "../features/Menu";
import Loader from "../features/Loader";

function Movies() {
  const { searchedMovie, isLoading } = useMovies();

  return (
    <main className="relative font-sans">
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <SideNav />
          <section className="absolute right-0 w-[85%] pl-2">
            <section className="mt-4 flex items-center justify-between rounded-lg bg-slate-400 pr-8">
              <SearchMovies />
              <Menu />
            </section>

            <section className="mt-8">
              <section className="flex items-center justify-between">
                <h2 className="text-4xl font-bold leading-normal text-black">
                  Your search result is here...
                </h2>
                <Link
                  className="mr-14 flex items-center justify-between text-lg font-normal text-rose-700"
                  to="#"
                >
                  See more
                  <img src="/images/Chevron right.png" alt="right-arrow" />
                </Link>
              </section>
              <section className="my-10 grid grid-cols-4">
                {searchedMovie.map((movie) => (
                  <MovieCard movie={movie} key={movie.id} />
                ))}
              </section>
            </section>
          </section>
        </section>
      )}
    </main>
  );
}

export default Movies;
