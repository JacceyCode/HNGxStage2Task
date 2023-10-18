import { movieTrailerUrl } from "../services/apiMovies";
import { useMovies } from "../context/MovieContext";
import Loader from "./Loader";
import SearchError from "../ui/SearchError";

function PlayVideo() {
  const { trailerKey, isLoading, searchError } = useMovies();
  const trailerUrl = `${movieTrailerUrl}${trailerKey}`;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main className="h-[20rem] rounded-3xl md:h-[30rem]">
          {searchError ? (
            <SearchError>{searchError}</SearchError>
          ) : (
            <iframe
              width="100%"
              className="rounded-3xl"
              height="100%"
              src={trailerUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          )}
        </main>
      )}
    </>
  );
}

export default PlayVideo;
