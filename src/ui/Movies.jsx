import { Link } from "react-router-dom";
import MovieCard from "../features/MovieCard";

function Movies() {
  return (
    <section>
      <section className="flex items-center justify-between">
        <h2 className="text-4xl font-bold leading-normal text-black">
          Featured Movie
        </h2>
        <Link
          className="mr-32 flex items-center justify-between text-lg font-normal text-rose-700"
          to="#"
        >
          See more
          <img src="./images/Chevron right.png" alt="right-arrow" />
        </Link>
      </section>
      <section className="my-10 grid grid-cols-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </section>
    </section>
  );
}

export default Movies;
