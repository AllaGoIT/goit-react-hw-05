import { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../films-api";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);

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
      <button type="button" className={css.btn}>
        Go back
      </button>
      {movies && (
        <div className={css.container}>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
          />
          <div className={css.containerText}>
            <h1 className={css.title}>{movies.original_title}</h1>
            <p className={css.userScore}>
              User Score:
              {Math.round(movies.popularity / movies.vote_count)}%
            </p>
            <p>
              <span className={css.overview}> Overview</span>
            </p>
            <p className={css.textOver}>{movies.overview}</p>
            <p className={css.genres}>Genres{movies.genres.name}</p>
            {error && <p>Opps! Error!</p>}
          </div>
        </div>
      )}

      <div className={css.containerAdd}>
        <p className={css.textAdditional}>Additional information</p>
        <ul className={css.ul}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li className={css.linkReviews}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;
