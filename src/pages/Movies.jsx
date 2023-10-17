import { Link } from "react-router-dom";
import MovieCard from "../features/MovieCard";
// import { useMovies } from "../services/MovieContext";
import SideNav from "../features/SideNav";
import SearchMovies from "../ui/SearchMovies";
import Menu from "../ui/Menu";
// import Loader from "../features/Loader";

function Movies() {
  // const { searchedMovie, isLoading } = useMovies();

  // return (
  //   <main className="relative font-sans">
  //     {isLoading ? (
  //       <Loader />
  //     ) : (
  //       <section>
  //         <SideNav />
  //         <section className="absolute right-0 w-full p-1  md:w-[88%] md:pl-2 lg:w-[85%]">
  //           <section className="mt-4 flex items-center justify-between rounded-lg bg-slate-400 pr-4">
  //             <SearchMovies />
  //             <Menu />
  //           </section>

  //           <section className="lg:mt-8">
  //             <section className="flex items-center justify-between">
  //               <h2 className="text-xl leading-normal text-black md:text-4xl md:font-bold">
  //                 Your search result is here...
  //               </h2>
  //               <Link
  //                 className="flex items-center justify-between text-lg font-normal text-rose-700 md:mr-14"
  //                 to="#"
  //               >
  //                 See more
  //                 <img src="/images/Chevron right.png" alt="right-arrow" />
  //               </Link>
  //             </section>
  //             <section className="my-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  //               {searchedMovie.map((movie) => (
  //                 <MovieCard movie={movie} key={movie.id} />
  //               ))}
  //             </section>
  //           </section>
  //         </section>
  //       </section>
  //     )}
  //   </main>
  // );

  return (
    <main className="relative font-sans">
      {
        <section>
          <SideNav />
          <section className="absolute right-0 w-full p-1  md:w-[88%] md:pl-2 lg:w-[85%]">
            <section className="mt-4 flex items-center justify-between rounded-lg bg-slate-400 pr-4">
              <SearchMovies />
              <Menu />
            </section>

            <section className="lg:mt-8">
              <section className="flex items-center justify-between">
                <h2 className="text-xl leading-normal text-black md:text-4xl md:font-bold">
                  Your search result is here...
                </h2>
                <Link
                  className="flex items-center justify-between text-lg font-normal text-rose-700 md:mr-14"
                  to="#"
                >
                  See more
                  <img src="/images/Chevron right.png" alt="right-arrow" />
                </Link>
              </section>
              <section className="my-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* {searchedMovie.map((movie) => (
                  <MovieCard movie={movie} key={movie.id} />
                ))} */}
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
              </section>
            </section>
          </section>
        </section>
      }
    </main>
  );
}

export default Movies;
