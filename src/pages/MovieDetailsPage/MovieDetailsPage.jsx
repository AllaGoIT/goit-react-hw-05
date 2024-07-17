import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../films-api";
import css from "./MovieDetailsPage.module.css";
// import { useSearchParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);
  // const [searchParams] = useSearchParams();
  // const genres = searchParams.get("name");
  useEffect(() => {
    async function fetchMoviesDetails() {
      try {
        setError(false);
        const results = await fetchMovieDetails(movieId);
        setMovies(results);
      } catch {
        setError(true);
      }
    }
    fetchMoviesDetails();
  }, [movieId]);

  return (
    <>
      {movies && (
        <div className={css.container}>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
          />
          <div className={css.containerText}>
            <h1>{movies.original_title}</h1>
            <p>User Score:{movies.popularity}</p>
            <p className={css.textOver}>
              <span className={css.overview}> Overview</span> <br />
              {movies.overview}
            </p>
            <p>Genres{movies.genres.name}</p>
            {error && <p>Opps! Error!</p>}
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;
