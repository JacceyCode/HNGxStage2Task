export const imageUrl = "https://image.tmdb.org/t/p/original";

const API = import.meta.env.VITE_MOVIE_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: API,
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

// "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGM5ZjE1NTQwYzNkOWJjMTA4ZDQ3YzMzODI1N2EwNSIsInN1YiI6IjY0ZmUzZDEyZmE0MDQ2MDBlMTdlODdmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jwEz8gksfxbvEje9CnuIIIbFgaaWsUlHZ816tfBIq0o",

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGM5ZjE1NTQwYzNkOWJjMTA4ZDQ3YzMzODI1N2EwNSIsInN1YiI6IjY0ZmUzZDEyZmE0MDQ2MDBlMTdlODdmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jwEz8gksfxbvEje9CnuIIIbFgaaWsUlHZ816tfBIq0o'
//   }
// };

// fetch(
//   "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
//   options,
// );

// fetch(
//   "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1

export const key = "60b27baf4a58705638ceead5c7e99e1c";

export const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGIyN2JhZjRhNTg3MDU2MzhjZWVhZDVjN2U5OWUxYyIsInN1YiI6IjY0ZmUzZDEyZmE0MDQ2MDBlMTdlODdmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rp61g8bsxGjI5IqHb8bJ4ridUpQKpwBmfBIa1qb0MGg";
