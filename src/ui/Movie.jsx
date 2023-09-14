import MovieDetails from "../features/MovieDetails";
import SideNav from "../features/SideNav";

function Movie() {
  return (
    <section className="relative w-screen">
      <SideNav />
      <MovieDetails />
    </section>
  );
}

export default Movie;
