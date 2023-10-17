import { useParams } from "react-router-dom";
import MobileNav from "../features/MobileNav";
import MovieDetails from "../features/MovieDetails";
import SideNav from "../features/SideNav";
import { useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import { getMovieDetails, getMovieTrailer } from "../services/apiMovies";
import Loader from "../features/Loader";

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
  const { setMovieData, setTrailerKey, setIsLoading, isLoading } = useMovies();
  const { id } = useParams();
  useEffect(
    function () {
      async function loadMoviedetail(id) {
        try {
          setIsLoading(true);
          const data = await getMovieDetails(id);
          const key = await getMovieTrailer(id);
          console.log(key);
          console.log(data);
          setMovieData(data);
          setTrailerKey(key);
          // return data;
        } catch (err) {
          alert(err);
          // throw new Error(err.status_message);
        } finally {
          setIsLoading(false);
        }
      }
      loadMoviedetail(id);
    },
    [id, setIsLoading, setMovieData, setTrailerKey],
  );

  return (
    <section className="flex flex-col gap-2 lg:flex-row">
      {isLoading && <Loader />}
      <MobileNav />
      <SideNav />
      <MovieDetails />
    </section>
  );
}

export default Movie;
