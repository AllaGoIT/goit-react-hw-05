import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/";
axios.defaults.baseURL = BASE_URL;

const options = {
  headers: {
    Authorization:
      "BearereyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzJjYThjNjU0ZDMyOGU1ZGJlYmQxZGU3ZDVhOTQyOSIsIm5iZiI6MTcyMDkzNTExOC43NDkwOTksInN1YiI6IjY2OTJiMzA4OGRjNWIxZDU0MGFkMjRkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qiB8ok6rWZvIjzmFNK5Nmim4KEnjKAzO3UfC9Vib3to  ",
  },
};

export const fetchTrendingMovies = async () => {
  const data = await axios.get(`trending/movie/day?language=en-US`, options);
  return data;
};

export const fetchSearchMovie = async (query) => {
  const { data } = await axios.get(`search/movie=${query}`, options);
  return data;
};

export const fetchMovieDetails = async () => {
  const data = await axios.get(`movie/{movie_id}`, options);
  return data;
};

export const fetchMovieCredits = async () => {
  const data = await axios.get(`movie/{movie_id}/credits`, options);
  return data;
};

export const fetchMovieReviews = async () => {
  const data = await axios.get(`movie/{movie_id}/reviews&page=1`, options);
  return data;
};
