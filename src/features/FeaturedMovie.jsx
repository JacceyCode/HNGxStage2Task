import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { IconContext } from "react-icons";
// import { useMovies } from "../services/MovieContext";
import MovieCard from "../features/MovieCard";

function FeaturedMovie() {
  //   const { popularMovies } = useMovies();

  return (
    <main className="flex w-full flex-col gap-14 px-28">
      <section className="flex items-center justify-between border-2">
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

      <section className="grid grid-cols-4 gap-20 border-2">
        {/* {popularMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))} */}
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </section>
    </main>
  );
}

export default FeaturedMovie;
