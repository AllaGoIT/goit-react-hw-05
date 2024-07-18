import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../films-api";
import css from "../HomePage/HomePage.module.css";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchTrending() {
      try {
        setError(false);
        const { results } = await fetchTrendingMovies();
        setMovies((prevMovies) => [...prevMovies, ...results]);
        setMovies(results);
      } catch {
        setError(true);
      }
    }
    fetchTrending();
  }, []);
  return (
    <div className={css.container}>
      <h1 className={css.h1}>Trending today</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
      {error && <p>Opps! Error</p>}
    </div>
  );
};
export default HomePage;
