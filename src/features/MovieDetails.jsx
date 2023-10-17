import MovieOverview from "./MovieOverview";
// import PlayVideo from "./PlayVideo";

function MovieDetails() {
  return (
    <main className="flex w-full flex-col gap-6 p-2 lg:p-8 lg:pl-60">
      {/* <PlayVideo /> */}
      <MovieOverview />
    </main>
  );
}

export default MovieDetails;
