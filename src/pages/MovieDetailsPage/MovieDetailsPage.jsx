import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../films-api";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMoviesDetails() {
      try {
        setError(false);
        const { results } = await fetchMovieDetails(movieId);
        setMovies((prevMovies) => [...prevMovies, ...results]);
        setMovies(results);
      } catch {
        setError(true);
      }
    }
    fetchMoviesDetails();
  }, [movieId]);

  return (
    <>
      <h1>MovieDetailsPage {movieId}</h1>
      {/* {movies.length > 0 && (<h1{movies.map((movie))}></h1>)} */}
      <Outlet />
    </>
  );
};
