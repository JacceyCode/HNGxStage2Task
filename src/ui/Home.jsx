import { Link } from "react-router-dom";
import MovieCard from "../features/MovieCard";
import { useMovies } from "../services/MovieContext";
import Hero from "./Hero";
import Footer from "./Footer";

function Home() {
  const { popularMovies } = useMovies();

  return (
    <section className="w-screen border-4 border-red-500">
      <Hero />
      <main className="w-full py-7 md:mt-5 md:px-6">
        <section className="flex items-center justify-between">
          <h2 className="text-xl font-bold leading-normal text-black md:text-4xl">
            Featured Movie
          </h2>
          <Link
            className="flex items-center justify-between text-lg font-normal text-rose-700 md:mr-14"
            to="#"
          >
            See more
            <img src="/images/Chevron right.png" alt="right-arrow" />
          </Link>
        </section>
        <section className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {popularMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </section>
      </main>
      <Footer />
    </section>
  );
}

export default Home;
