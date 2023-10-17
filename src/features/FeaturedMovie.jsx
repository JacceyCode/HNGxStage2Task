import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { useMovies } from "../context/MovieContext";
import MovieCard from "../features/MovieCard";
import Loader from "./Loader";

function FeaturedMovie() {
  const { popularMovies, isLoading } = useMovies();

  return (
    <main className="flex w-full flex-col gap-14 px-1 lg:px-28">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="flex items-center justify-between">
            <h2 className="text-xl font-bold leading-normal text-black md:text-4xl">
              Featured Movie
            </h2>

            <Link
              className="flex items-center justify-center gap-2 text-lg font-normal text-rose-700"
              to="#"
            >
              See more
              <IconContext.Provider value={{ size: "15px" }}>
                <FaChevronRight />
              </IconContext.Provider>
            </Link>
          </section>

          <section className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {popularMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </section>
        </>
      )}
    </main>
  );
}

export default FeaturedMovie;
