import { Link, useLocation } from "react-router-dom";
import css from "../MovieList/MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.container}>
      {movies.length > 0 && (
        <ul className={css.ul}>
          {movies.map((movie) => (
            <li key={movie.id} className={css.link}>
              <Link to={`/movies/${movie.id}`} state={location}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MovieList;
