import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzIwMDg5YmRkODI3MGI2ZmIwNTM2MTg3OTczNWI4ZCIsIm5iZiI6MTc0NzgzNjkwMi41MzIsInN1YiI6IjY4MmRkZmU2YTkxYjY3OTFmNzY0OTcyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o5zD8ZfjYvVcpYSa1i1llIBYFC5AU90r53dY8R-1cwY";

const options = {
  headers: {
    Authorization: TOKEN,
  },
};

export const fetchTrendingMovies = async () => {
  const res = await axios.get(`${API_URL}/trending/movie/day`, options);
  return res.data.results;
};

export const fetchSearchMovies = async (query) => {
  const res = await axios.get(
    `${API_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return res.data.results;
};

export const fetchMovieDetails = async (id) => {
  const res = await axios.get(`${API_URL}/movie/${id}`, options);
  return res.data;
};

export const fetchMovieCredits = async (id) => {
  const res = await axios.get(`${API_URL}/movie/${id}/credits`, options);
  return res.data.cast;
};

export const fetchMovieReviews = async (id) => {
  const res = await axios.get(`${API_URL}/movie/${id}/reviews`, options);
  return res.data.results;
};
