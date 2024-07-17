import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../films-api";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMoviesDetails() {
      try {
        setError(false);
        const { results } = await fetchMovieDetails(movieId);
        setMovies((prevMovies) => [...prevMovies, ...results]);
      } catch {
        setError(true);
      }
    }
    fetchMoviesDetails();
  }, [movieId]);

  return (
    <>
      {/* <h1>MovieDetailsPage {movieId}</h1> */}
      {movies.length > 0 && (
        <div>
          {movies.map((movie) => (
            <h1 key={movie.id}>{}</h1>
          ))}
          {error && <p>Opps! Error!</p>}
        </div>
      )}
      <Outlet />
    </>
  );
};
