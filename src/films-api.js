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
  const { data } = await axios.get(`movies/${movieId}`);
  return data;
};

export const fetchMovieCredits = async () => {
  const data = await axios.get(`movie/{movie_id}/credits`);
  return data;
};

export const fetchMovieReviews = async () => {
  const data = await axios.get(`movie/{movie_id}/reviews&page=1`);
  return data;
};
