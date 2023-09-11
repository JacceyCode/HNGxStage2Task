function MovieCard() {
  return (
    <section
      data-testid="movie-card"
      className="mb-14 flex flex-col items-start gap-3"
    >
      <section
        data-testid="movie-poster"
        className="relative h-96 w-60 bg-[url('./images/MoviePoster.png')] bg-contain bg-center"
      >
        <section className="my-4 flex h-8 items-center justify-between px-5">
          <span className="rounded-xl bg-gray-400 p-1 text-xs font-bold text-gray-900">
            TV SERIES
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400">
            <img src="./images/Heart.png" alt="heart-icon" />
          </span>
        </section>
      </section>
      <span
        data-testid="movie-release-date"
        className="text-lg font-medium leading-normal text-gray-400"
      >
        USA, 2013 - Current
      </span>
      <h3 data-testid="movie-title" className="text-lg font-bold text-gray-900">
        Batman Begins
      </h3>

      <span className="flex w-60 items-center justify-between font-normal">
        <span className="flex items-center gap-2">
          <img src="./images/imdb.png" alt="imdb" /> 86.0 / 100
        </span>

        <span className="flex items-center gap-2">
          <img src="./images/rate.png" alt="rate" /> 97%
        </span>
      </span>

      <span className="text-lg font-normal leading-normal text-gray-400">
        Action, Adventure, Horror
      </span>
    </section>
  );
}

export default MovieCard;
