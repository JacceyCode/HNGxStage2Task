import { useParams } from "react-router-dom";
import MobileNav from "../features/MobileNav";
import MovieDetails from "../features/MovieDetails";
import SideNav from "../features/SideNav";

function Movie() {
  const { id } = useParams();

  return (
    <section className="flex flex-col gap-2 lg:flex-row">
      <MobileNav />
      <SideNav />
      <MovieDetails id={id} />
    </section>
  );
}

export default Movie;
