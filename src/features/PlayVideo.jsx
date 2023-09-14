import { useMovies } from "../services/MovieContext";
import { imageUrl } from "../services/apiMovies";

function PlayVideo() {
  const { movieData } = useMovies();
  const { backdrop_path: path } = movieData;

  const src = "#";
  return (
    <main className="relative h-96 w-full">
      <video className="h-full w-full rounded-2xl" controls>
        <source src={src} type="video/mp4" />
        Sorry, your browser does not support embedded videos.
      </video>
      <img
        className="absolute left-0 top-0 h-full w-full rounded-2xl"
        loading="lazy"
        src={`${imageUrl}${path}`}
      />
      <button className="absolute left-[47%] top-24 h-28 w-28 rounded-full border-2 border-gray-200 border-opacity-20 bg-white bg-opacity-30 shadow backdrop-blur-sm">
        <img
          className="absolute left-[30%] top-[28px] h-14 w-14 shadow"
          src="/images/Play_1.png"
          alt="Play video icon"
        />
      </button>
      <p className="absolute left-[46%] top-[55%] font-['Poppins'] text-2xl font-medium text-gray-100">
        Watch Trailer
      </p>
    </main>
  );
}

export default PlayVideo;
