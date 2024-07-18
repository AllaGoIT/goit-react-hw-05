import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../films-api";
import { Link } from "react-router-dom";
import css from "../MovieList/MovieList.module.css";
import StyleSheet from "react-native";

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

  const styles = StyleSheet.create({
    links: {
      listStyle: "style",
    },
  });

  return (
    <>
      {movies.length > 0 && (
        <ul className={css.ul}>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link styles={styles.links} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {error && <p>Opps</p>}
    </>
  );
};
export default MovieList;
