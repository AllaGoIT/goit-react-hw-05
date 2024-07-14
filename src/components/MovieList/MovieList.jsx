import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../films-api";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const [page, setPages] = useState(1);

  useEffect(() => {
    async function fetchTrending() {
      try {
        setError(false);
        const { results } = await fetchTrendingMovies();
        setMovies((prevMovies) => [...prevMovies, ...results]);
        setVisible();
      } catch {
        setError(true);
      }
    }
    fetchTrending();
  }, []);

  return { movies } && <ul></ul>, { error } && <p>Opps</p>;
};
export default MovieList;
