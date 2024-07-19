import { fetchMovieReviews } from "../../films-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "../MovieReviews/MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!movieId) return;
    async function fetchMoviesReviews() {
      try {
        setError(false);
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
        // console.log(results);
      } catch {
        setError(true);
      }
    }
    fetchMoviesReviews();
  }, [movieId]);
  return (
    <div className={css.container}>
      <ul className={css.ul}>
        {reviews.map((review) => (
          <li key={review.id}>
            <p className={css.textAuthor}>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
      {reviews.length <= 0 && (
        <p className={css.text}>We do not have any reviews for this movie.</p>
      )}
      {error && <p>Opps! Error!</p>}
    </div>
  );
};

export default MovieReviews;
