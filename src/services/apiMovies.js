export const imageUrl = "https://image.tmdb.org/t/p/original";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_MOVIE_KEY,
  },
};

export function getDetails(id) {
  const res = fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options,
  );
  return res;
}

export function getMovie(query) {
  const res = fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options,
  );
  return res;
}

export function getPopularMovies() {
  const res = fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options,
  );
  return res;
}

export function getMovieTrailer(movie_id) {
  const res = fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
    options,
  );
  return res;
}
