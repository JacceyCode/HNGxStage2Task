import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaChevronRight } from "react-icons/fa6";
import MovieCard from "../features/MovieCard";
import SideNav from "../features/SideNav";
import { useMovies } from "../context/MovieContext";
import MobileHeader from "../features/MobileHeader";
// import SearchMovies from "../ui/SearchMovies";
// import Menu from "../ui/Menu";
// import Logo from "../ui/Logo";

function Movies() {
  const { searchedMovie } = useMovies();

  return (
    <main className="font-sans">
      <section>
        <SideNav />

        <section className="flex w-full flex-col gap-4 p-2 lg:p-8 lg:pl-60">
          <MobileHeader />

          <section className=" flex flex-col gap-4">
            <section className="flex items-center justify-between">
              <h2 className="text-xl font-bold leading-normal text-black md:text-2xl">
                Your search result is here...
              </h2>

              <Link
                className="flex items-center justify-between text-lg font-normal text-rose-700"
                to="#"
              >
                See more
                <IconContext.Provider value={{ size: "15px" }}>
                  <FaChevronRight />
                </IconContext.Provider>
              </Link>
            </section>

            <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {searchedMovie.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Movies;
