import MovieDetails from "../features/MovieDetails";
import SideNav from "../features/SideNav";
import Loader from "../features/Loader";
import { useMovies } from "../services/MovieContext";

function Movie() {
  const { isLoading } = useMovies();
  return (
    <section className="relative w-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <SideNav />
          <MovieDetails />
        </section>
      )}
    </section>
  );
}

export default Movie;
