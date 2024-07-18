import { fetchMovieReviews } from "../../films-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const MovieReviews = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!movieId) return;
    async function fetchMoviesReviews() {
      try {
        setError(false);
        const results = await fetchMovieReviews(movieId);
        setMovies(results.crew);
      } catch {
        setError(true);
      }
    }
    fetchMoviesReviews();
  }, [movieId]);
  return (
    <>
      {movies && (
        <div>
          <p>ghfgh</p>
        </div>
      )}
      {error && <p>Opps! Error!</p>}
    </>
  );
};

export default MovieReviews;
