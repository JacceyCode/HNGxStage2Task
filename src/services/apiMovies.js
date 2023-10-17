const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjk5OTc2MmI2MjIyZGQyYzM1MWRjMjg4Mjg2NzE5MyIsInN1YiI6IjY0ZmUzZDEyZmE0MDQ2MDBlMTdlODdmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ee9TrqOrsNfxBUk0tK3VrHkMSiWxgkhqlGi9yn00OnI",
  },
};

export const imageUrl = "https://image.tmdb.org/t/p/original";

export const movieTrailerUrl = "https://www.youtube.com/embed/";

export async function getPopularMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options,
  );
  const data = await res.json();
  const { results } = data;
  return results;
}

export async function getMovie(query) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options,
  );
  const data = await res.json();
  return data;
}

export async function getMovieDetails(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options,
  );
  const data = await res.json();
  return data;
}

export async function getMovieTrailer(movie_id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
    options,
  );
  const data = await res.json();
  const { results } = data;
  const { key } = results[0];
  return key;
}
