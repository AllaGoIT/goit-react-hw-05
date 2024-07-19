import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/";
axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: "6c2ca8c654d328e5dbebd1de7d5a9429",
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`);
  return data;
};

export const fetchSearchMovie = async (query) => {
  const { data } = await axios.get(`search/movie=${query}`);
  return data;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}`);
  return data;
};

export const fetchMovieCredits = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/credits`);
  return data;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/reviews`);
  return data;
};
