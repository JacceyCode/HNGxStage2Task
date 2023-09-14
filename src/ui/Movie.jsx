/* eslint-disable no-unused-vars */
// import { useParams } from "react-router-dom";
import MovieDetails from "../features/MovieDetails";
import SideNav from "../features/SideNav";
// import { useMovies } from "../services/MovieContext";
// import { useEffect } from "react";
// import { API_KEY, MOVIEDETAIL_API, getDetails } from "../services/apiMovies";

function Movie() {
  // const { id } = useParams();
  // const { setMovieData } = useMovies();

  // useEffect(
  //   function () {
  //     async function loadMoviedetail() {
  //       // const res = await fetch(`${MOVIEDETAIL_API}${id}${API_KEY}`);
  //       const res = await getDetails(id);
  //       const data = await res.json();
  //       setMovieData(data);
  //       console.log(data);
  //       return data;
  //     }
  //     loadMoviedetail();
  //   },
  //   [id, setMovieData],
  // );

  return (
    <section className="relative w-screen">
      <SideNav />
      <MovieDetails />
    </section>
  );
}

export default Movie;
