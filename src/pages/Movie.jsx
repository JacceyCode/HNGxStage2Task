import { useParams } from "react-router-dom";
import MovieDetails from "../features/MovieDetails";
import SideNav from "../features/SideNav";
import MobileHeader from "../features/MobileHeader";

function Movie() {
  const { id } = useParams();

  return (
    <section className="flex flex-col gap-2 lg:flex-row">
      <SideNav />
      <span className="space-y-4 lg:p-8 lg:pl-60">
        <MobileHeader />
        <MovieDetails id={id} />
      </span>
    </section>
  );
}

export default Movie;
