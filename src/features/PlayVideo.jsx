/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { useMovies } from "../services/MovieContext";
import { getMovieTrailer } from "../services/apiMovies";

function PlayVideo() {
  const [key, setKey] = useState("");
  const {
    movieData: { id },
  } = useMovies();

  async function trailer() {
    const res = await getMovieTrailer(id);
    const data = await res.json();
    const { results } = data;
    const { key } = results[0];
    // console.log(data);
    // console.log(results[0]);
    console.log(key);
    // const src = `https://www.youtube.com/watch?v=${key}`;
    // console.log(src);
    return key;
  }
  trailer();

  return (
    <main className="h-[20rem] md:h-[30rem]">
      <iframe
        width="100%"
        className="rounded-3xl"
        height="100%"
        src="https://www.youtube.com/embed/PLl99DlL6b4"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
      ></iframe>

      {/* {path ? (
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
          <span>🚫</span> Sorry! No video trailer was found.
        </span>
      )} */}
    </main>
  );
}

export default PlayVideo;
