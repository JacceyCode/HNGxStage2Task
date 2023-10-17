/* eslint-disable react/prop-types */

import { movieTrailerUrl } from "../services/apiMovies";
import { useMovies } from "../context/MovieContext";
import Loader from "./Loader";

function PlayVideo() {
  const { trailerKey } = useMovies();

  if (!trailerKey) return <Loader />;

  const trailerUrl = `${movieTrailerUrl}${trailerKey}`;

  return (
    <main className="h-[20rem] md:h-[30rem]">
      <iframe
        width="100%"
        className="rounded-3xl"
        height="100%"
        src={trailerUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </main>
  );
}

export default PlayVideo;
