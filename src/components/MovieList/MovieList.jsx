import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../films-api";
import { Link } from "react-router-dom";
import css from "../MovieList/MovieList.module.css";

const MovieList = () => {
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
      {movies.length > 0 && (
        <ul className={css.ul}>
          {movies.map((movie) => (
            <li key={movie.id} className={css.link}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}

      {error && <p>Opps</p>}
    </div>
  );
};
export default MovieList;
