import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../films-api";
// import { Link } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

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

  return (
    <>
      {/* <Link to ="/movies/${movie.id}">  */}
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title} </li>
          ))}
        </ul>
      )}
      {/* <Link/> */}
      {error && <p>Opps</p>}
    </>
  );
};
export default MovieList;
