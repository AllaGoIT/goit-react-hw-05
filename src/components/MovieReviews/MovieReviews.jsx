import { fetchMovieReviews } from "../../films-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!movieId) return;
    async function fetchMoviesReviews() {
      try {
        setError(false);
        const results = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch {
        setError(true);
      }
    }
    fetchMoviesReviews();
  }, [movieId]);
  return (
    <>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
      {error && <p>Opps! Error!</p>}
    </>
  );
};

export default MovieReviews;
