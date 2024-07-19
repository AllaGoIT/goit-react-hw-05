import { fetchMovieCredits } from "../../films-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "../MovieCast/MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    async function fetchMoviesCredits() {
      try {
        setError(false);
        const results = await fetchMovieCredits(movieId);
        setCast(results.cast);
      } catch {
        setError(true);
      }
    }
    fetchMoviesCredits();
  }, [movieId]);

  return (
    <div className={css.container}>
      <ul className={css.ul}>
        {cast.map((item) => (
          <li key={item.id}>
            <p className={css.name}>{item.name}</p>
            <img
              className={css.img}
              width={70}
              height={100}
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              alt={item.name}
            />
          </li>
        ))}
      </ul>

      {error && <p>Opps! Error!</p>}
    </div>
  );
};
export default MovieCast;
