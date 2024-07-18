import { fetchMovieCredits } from "../../films-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    async function fetchMoviesCredits() {
      try {
        setError(false);
        const results = await fetchMovieCredits(movieId);
        setMovies(results.cast);
      } catch {
        setError(true);
      }
    }
    fetchMoviesCredits();
  }, [movieId]);

  return (
    <>
      {movies && (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movies}`} alt="" />
        </div>
      )}
      {error && <p>Opps! Error!</p>}
    </>
  );
};
export default MovieCast;
