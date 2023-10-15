/* eslint-disable react/prop-types */
// import { Link, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHeart } from "react-icons/fa6";
import { GiTomato } from "react-icons/gi";
import { Link } from "react-router-dom";
// import { getDetails, imageUrl } from "../services/apiMovies";
// import { useMovies } from "../services/MovieContext";

// function MovieCard({ movie }) {
function MovieCard() {
  // const navigate = useNavigate();
  // const { setMovieData, setIsLoading } = useMovies();
  // const {
  //   title,
  //   poster_path: imagePath,
  //   release_date: date,
  //   popularity,
  //   id,
  // } = movie;

  // async function loadMoviedetail(id) {
  //   try {
  //     setIsLoading(true);
  //     navigate(`/movies/${id}`);
  //     const res = await getDetails(id);
  //     const data = await res.json();
  //     setMovieData(data);
  //     return data;
  //   } catch {
  //     // throw Error();
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  return (
    // <Link
    //   onClick={() => loadMoviedetail(id)}
    //   // to={`/movies/${id}`}
    //   data-testid="movie-card"
    //   className="mx-auto mb-14 flex w-fit flex-col items-start gap-2 duration-200 hover:scale-105 md:w-72"
    // >
    //   {imagePath ? (
    //     <section className="relative w-full">
    //       <img
    //         className="h-[30rem] w-full"
    //         loading="lazy"
    //         data-testid="movie-poster"
    //         src={`${imageUrl}${imagePath}`}
    //         alt={title}
    //       />

    //       <button
    //         className="absolute right-4 top-4 rounded-full bg-white
    //       duration-300 hover:translate-y-2 hover:scale-150 hover:bg-rose-400"
    //       >
    //         <img className="w-8" src="./images/Heart.png" alt="heart-icon" />
    //       </button>
    //     </section>
    //   ) : (
    //     <span
    //       data-testid="movie-poster"
    //       className="flex h-[30rem] w-full items-center justify-center border-2 border-red-400 p-4 font-serif text-2xl font-extrabold"
    //     >
    //       <span>🚫</span> Sorry, no image was found.
    //     </span>
    //   )}
    //   <span
    //     data-testid="movie-release-date"
    //     className="w-full text-lg font-medium leading-normal text-gray-600"
    //   >
    //     {date}
    //   </span>
    //   <h3
    //     data-testid="movie-title"
    //     className="w-full text-lg font-bold text-gray-900"
    //   >
    //     {title}
    //   </h3>

    //   <span className="flex w-full items-center justify-between font-normal">
    //     <span className="flex items-center gap-2">
    //       <img src="./images/imdb.png" alt="imdb" /> {popularity.toFixed(2)}
    //     </span>

    //     <span className="flex items-center gap-2">
    //       <img src="./images/rate.png" alt="rate" /> 97%
    //     </span>
    //   </span>

    //   <span className="w-full text-lg font-normal leading-normal text-gray-400">
    //     Action, Adventure, Horror
    //   </span>
    // </Link>

    <Link
      // onClick={() => loadMoviedetail(id)}
      // to={`/movies/${id}`}
      data-testid="movie-card"
      className="flex flex-col items-start"
    >
      <section
        className="flex h-[27rem] w-full items-start justify-end bg-[url('./images/MoviePoster.png')] bg-cover bg-center bg-no-repeat p-4 lg:h-[22rem] xl:h-[27rem]"
        data-testid="movie-poster"
      >
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/50 text-xl text-zinc-50/80 transition-all hover:scale-125">
          <FaHeart />
        </button>
      </section>

      <section className="flex w-full flex-col gap-2">
        <span
          data-testid="movie-release-date"
          className="w-full text-lg font-medium leading-normal text-gray-600/50"
        >
          {"USA, 2017"}
        </span>
        <h3
          data-testid="movie-title"
          className="w-full text-lg font-bold text-gray-900"
        >
          {"Spider Man"}
        </h3>

        <span className="flex w-full items-center justify-between font-normal">
          <span className="flex items-center gap-2">
            <img src="./images/imdb.png" alt="imdb" /> {123}
          </span>

          <span className="flex items-center gap-1">
            <IconContext.Provider value={{ color: "orangered", size: "20px" }}>
              <GiTomato />
            </IconContext.Provider>
            97%
          </span>
        </span>
        <span className="w-full text-lg font-normal leading-normal text-gray-400">
          Action, Adventure, Horror
        </span>
      </section>
    </Link>
  );
}

export default MovieCard;
