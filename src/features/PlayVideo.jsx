import { HiPlay } from "react-icons/hi2";
import { useMovies } from "../services/MovieContext";
import { imageUrl } from "../services/apiMovies";
import { IconContext } from "react-icons";

function PlayVideo() {
  const { movieData } = useMovies();
  const { backdrop_path: path } = movieData;

  const src = `${imageUrl}${path}`;
  return (
    <main className="h-[20rem] md:h-[30rem]">
      {/* <video className="h-full w-full rounded-2xl" controls>
        <source src={src} type="video/mp4" />
        Sorry, your browser does not support embedded videos.
      </video> */}
      {path ? (
        <section className="relative flex items-center justify-center">
          <img
            className="h-[20rem] w-full rounded-2xl md:h-[30rem]"
            loading="lazy"
            src={src}
            alt="Trailer video"
          />

          <section className="absolute flex h-32 w-40 flex-col items-center justify-center">
            <button className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gray-200/20 bg-white/30 shadow backdrop-blur-sm">
              <IconContext.Provider value={{ size: "70px", color: "white" }}>
                <HiPlay />
              </IconContext.Provider>
            </button>

            <p className="font-['Poppins'] text-2xl font-medium text-gray-100">
              Watch Trailer
            </p>
          </section>
        </section>
      ) : (
        <span className="flex h-full w-full items-center justify-center border-2 border-red-400 p-4 font-serif text-2xl font-extrabold">
          <span>🚫</span> Sorry, no trailer video was found.
        </span>
      )}
    </main>
  );
}

export default PlayVideo;
