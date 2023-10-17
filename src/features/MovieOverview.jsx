import { HiOutlineChevronDown } from "react-icons/hi";
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

  const utcDate = new Date(date).getUTCFullYear();
  const hour = Math.trunc(runtime / 60);
  const min = runtime - hour * 60;

  return (
    <section className="flex flex-col">
      <section className="flex flex-wrap items-center justify-between gap-2 font-['Poppins'] text-xl font-medium text-zinc-800">
        <span className="flex flex-wrap gap-2">
          <span data-testid="movie-title">{title}</span>
          <span>&middot;</span>
          <span data-testid="movie-release-date">{utcDate}</span>
          <span>&middot;</span>
          <span>PG-13</span>
          <span>&middot;</span>
          <span data-testid="movie-runtime">{`${hour}h ${min}m`}</span>
          {genres?.map((genre) => (
            <span
              className="flex h-7 w-auto items-center justify-center rounded-2xl border border-pink-100 p-2 font-['Poppins'] text-base font-medium text-red-700"
              key={genre.id}
            >
              {genre.name}
            </span>
          ))}
        </span>

        <span className="">
          ⭐ {rate.toFixed(1)} | {Math.trunc(totalRate / 1000)}k
        </span>
      </section>

      <section className="flex flex-wrap gap-4 md:flex-nowrap">
        <section
          data-testid="movie-overview"
          className="mt-6 w-full space-y-4 md:w-[70%]"
        >
          <p className="font-['Poppins'] text-lg font-semibold text-zinc-800">
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

          <section className="flex items-center justify-between rounded-lg border border-stone-300 bg-white bg-opacity-80 py-1 pr-1 font-['Poppins'] ">
            <span className="font-medium text-zinc-800 md:text-xl">
              <span className="mr-1 rounded-lg bg-rose-700 py-2 font-medium text-white md:text-xl">
                Top rated movie #65
              </span>
              Awards 9 nominations
            </span>
            <HiOutlineChevronDown />
          </section>
        </section>

        <section className="w-full space-y-2 px-4 pt-2 md:w-[30%]">
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
    </section>
  );
}

export default MovieOverview;
