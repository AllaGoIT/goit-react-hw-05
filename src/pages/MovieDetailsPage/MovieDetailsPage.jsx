import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../films-api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMoviesDetails() {
      try {
        setError(false);
        const { results } = await fetchMovieDetails(movieId);
        setMovies(results);
      } catch {
        setError(true);
      }
    }
    fetchMoviesDetails();
  }, [movieId]);

  return (
    <>
      {movies > 0 && (
        <div>
          <h1>{movies.original_title}</h1>
          <img src={movies.poster_path} />
          <p>{movies.popularity}</p>
          <p>Overview{movies.overview}</p>
          <p>Genres{movies.genres.name}</p>
          {error && <p>Opps! Error!</p>}
        </div>
      )}
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;
