import { useMovies } from "../services/MovieContext";

function MovieOverview() {
  const { movieData } = useMovies();
  const {
    title,
    release_date: date,
    runtime,
    genres,
    vote_average: rate,
    vote_count: totalRate,
    overview,
    tagline,
    production_companies: company,
    production_countries: country,
  } = movieData;

  const utcDate = new Date(date).toUTCString();

  return (
    <section className="relative mx-auto mt-6 w-[99%]">
      <section className="relative flex items-center space-x-2 font-['Poppins'] text-xl font-medium text-neutral-700">
        <span data-testid="movie-title">{title}</span>
        <span>&middot;</span>
        <span data-testid="movie-release-date">{utcDate}</span>
        <span>&middot;</span>
        <span>PG-13</span>
        <span>&middot;</span>
        <span data-testid="movie-runtime">{runtime}</span>
        {genres?.map((genre) => (
          <span
            className="flex h-7 w-auto items-center justify-center rounded-2xl border border-pink-100 p-2 font-['Poppins'] text-base font-medium text-red-700"
            key={genre.id}
          >
            {genre.name}
          </span>
        ))}
        <span className="absolute right-0">
          ⭐ {rate} | {totalRate}
        </span>
      </section>
      <section
        data-testid="movie-overview"
        className="absolute left-0 mt-6 w-[70%] space-y-4"
      >
        <p className="font-['Poppins'] text-2xl font-semibold text-zinc-800">
          {tagline}
        </p>
        <p className="font-['Poppins'] text-xl font-normal text-zinc-800">
          {overview}
        </p>
        <p className="font-['Poppins'] font-normal text-zinc-600">
          Production company :{" "}
          <span className="text-rose-700">{company[0]?.name}</span>
        </p>
        <p className="font-['Poppins'] font-normal text-zinc-600">
          Production country :{" "}
          <span className="text-rose-700">{country[0]?.name}</span>
        </p>

        <section className="relative flex h-14 w-[80%] items-center rounded-lg border border-stone-300 bg-white bg-opacity-80 ">
          <span className="flex h-full w-72 items-center justify-center rounded-lg bg-rose-700 font-['Poppins'] text-xl font-medium text-white">
            Top rated movie #65
          </span>
          <span className="flex h-full w-72 items-center justify-center font-['Poppins'] text-xl font-medium text-zinc-800">
            Awards 9 nominations
          </span>
          <span className="absolute right-4">🔽</span>
        </section>
      </section>
      <section className="absolute right-0 w-[30%] space-y-2 pl-4 pt-2">
        <button className="h-14 w-full rounded-lg bg-rose-700 text-white">
          🎟️ See Showtimes
        </button>
        <button className="h-14 w-full rounded-lg border border-rose-700 bg-rose-700 bg-opacity-10">
          ≣ More watch options
        </button>
        <section className="relative h-56 w-full">
          <img
            className="absolute left-0 top-0 h-full w-full rounded-lg"
            src="/images/Advert.png"
            alt="advert"
          />
          <span className="absolute bottom-0 left-0 flex h-10 w-full items-center justify-center rounded-lg bg-neutral-900 bg-opacity-50 font-['Poppins'] text-sm font-medium text-gray-200 shadow backdrop-blur-sm">
            ≣ The Best Movies and Shows in September
          </span>
        </section>
      </section>
    </section>
  );
}

export default MovieOverview;
