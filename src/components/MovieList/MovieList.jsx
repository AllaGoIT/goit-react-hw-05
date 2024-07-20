import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../films-api";
import { Link } from "react-router-dom";
import css from "../MovieList/MovieList.module.css";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieFilter = searchParams.get("movie") ?? "";
  const changeMovieFilter = (newMovie) => {
    searchParams.set("movie", newMovie);
    setSearchParams(searchParams);
  };
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

  const filterMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(movieFilter.toLowerCase())
  );

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
      <SearchForm onSearch={changeMovieFilter} onFilter={filterMovies} />
      {error && <p>Opps</p>}
    </div>
  );
};
export default MovieList;
