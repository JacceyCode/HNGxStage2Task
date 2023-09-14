import { Link } from "react-router-dom";
import MovieCard from "../features/MovieCard";
import { useMovies } from "../services/MovieContext";
import Hero from "./Hero";
import Footer from "./Footer";

function Home() {
  const { popularMovies } = useMovies();

  return (
    <section>
      <Hero />

      <main className="mt-5 px-14 py-7">
        <section className="flex items-center justify-between">
          <h2 className="text-4xl font-bold leading-normal text-black">
            Featured Movie
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
