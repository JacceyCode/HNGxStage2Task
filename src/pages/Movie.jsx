import MobileNav from "../features/MobileNav";
import MovieDetails from "../features/MovieDetails";
import SideNav from "../features/SideNav";
// import Loader from "../features/Loader";
// import { useMovies } from "../services/MovieContext";

// function Movie() {
//   const { isLoading } = useMovies();
//   return (
//     <section className="relative w-screen">
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <section>
//           <SideNav />
//           <MovieDetails />
//         </section>
//       )}
//     </section>
//   );
// }

function Movie() {
  return (
    <section className="flex flex-col gap-2 lg:flex-row">
      <MobileNav />
      <SideNav />
      <MovieDetails />
    </section>
  );
}

export default Movie;
