export const API_KEY = "?api_key=f8c9f15540c3d9bc108d47c338257a05&";

export const API = "https://api.themoviedb.org/3/movie/popular";

export const imageUrl = "https://image.tmdb.org/t/p/original";

export const MOVIEDETAIL_API = "https://api.themoviedb.org/3/movie";

export const SEARCH_API = "https://api.themoviedb.org/3/search/movie";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGM5ZjE1NTQwYzNkOWJjMTA4ZDQ3YzMzODI1N2EwNSIsInN1YiI6IjY0ZmUzZDEyZmE0MDQ2MDBlMTdlODdmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jwEz8gksfxbvEje9CnuIIIbFgaaWsUlHZ816tfBIq0o",
  },
};

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGM5ZjE1NTQwYzNkOWJjMTA4ZDQ3YzMzODI1N2EwNSIsInN1YiI6IjY0ZmUzZDEyZmE0MDQ2MDBlMTdlODdmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jwEz8gksfxbvEje9CnuIIIbFgaaWsUlHZ816tfBIq0o'
//   }
// };

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGM5ZjE1NTQwYzNkOWJjMTA4ZDQ3YzMzODI1N2EwNSIsInN1YiI6IjY0ZmUzZDEyZmE0MDQ2MDBlMTdlODdmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jwEz8gksfxbvEje9CnuIIIbFgaaWsUlHZ816tfBIq0o",
//   },
// };

export const search = fetch(
  "https://api.themoviedb.org/3/search/movie?query=query&include_adult=false&language=en-US&page=1",
  options,
);

export const id = fetch(
  "https://api.themoviedb.org/3/movie/movie_id?language=en-US",
  options,
);

export function getDetails(id) {
  const res = fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options,
  );
  return res;
}
