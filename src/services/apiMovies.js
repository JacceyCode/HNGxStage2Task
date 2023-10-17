export const imageUrl = "https://image.tmdb.org/t/p/original";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjk5OTc2MmI2MjIyZGQyYzM1MWRjMjg4Mjg2NzE5MyIsInN1YiI6IjY0ZmUzZDEyZmE0MDQ2MDBlMTdlODdmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ee9TrqOrsNfxBUk0tK3VrHkMSiWxgkhqlGi9yn00OnI",
  },
};

export function getMovieDetails(id) {
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
