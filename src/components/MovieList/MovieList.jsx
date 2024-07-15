import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../films-api";

const MovieList = ({ data }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  // const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function fetchTrending() {
      try {
        setError(false);
        const { results } = await fetchTrendingMovies();
        setMovies((prevMovies) => [...prevMovies, ...results]);
        // setVisible(true);
      } catch {
        setError(true);
      }
    }
    fetchTrending();
  }, []);

  return (
    <>
      {movies > 0 && (
        <ul>
          {data.map((title) => (
            <li key={title.id}>{title.title} </li>
          ))}
        </ul>
      )}
      {error && <p>Opps</p>}
    </>
  );
};
export default MovieList;
