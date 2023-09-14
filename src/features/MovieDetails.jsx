import MovieOverview from "./MovieOverview";
import PlayVideo from "./PlayVideo";

function MovieDetails() {
  return (
    <main className="absolute right-0 w-[85%] p-6">
      <PlayVideo />
      <MovieOverview />
    </main>
  );
}

export default MovieDetails;
