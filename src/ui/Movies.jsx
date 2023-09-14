import { Link } from "react-router-dom";
import Header from "../features/Header";
import MovieCard from "../features/MovieCard";
import { useMovies } from "../services/MovieContext";
import Footer from "./Footer";

function Movies() {
  const { searchedMovie } = useMovies();

  return (
    <main className="relative min-h-screen w-full border-4 border-red-400 bg-slate-300 font-sans">
      <Header />

      <section className="my-20 px-20 py-7">
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
      <section className="absolute bottom-[2%] left-[40%] p-12">
        <Footer />
      </section>
    </main>
  );
}

export default Movies;
