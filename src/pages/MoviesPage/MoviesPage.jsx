import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import { fetchSearchMovie } from "../../films-api";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
// import { useMemo } from "react";

const MoviesPage = () => {
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState("");

  const movieFilter = searchParams.get("query") ?? "";
  // const changeMovieFilter = (newMovie) => {
  //   searchParams.set("movie", newMovie);
  //   setSearchParams(searchParams);
  // };
  useEffect(() => {
    if (!movieFilter) return;
    async function fetchSearchMovies() {
      try {
        setError(false);
        const { results } = await fetchSearchMovie(movieFilter);
        setMovies((prevMovies) => [...prevMovies, ...results]);
        // setQuery(total_pages > 0);
        setMovies(results);
      } catch {
        setError(true);
      }
    }
    fetchSearchMovies();
  }, [movieFilter]);

  // const filterMovies = useMemo(() => {
  //   return movies.filter((movie) =>
  //     movie.title.toLowerCase().includes(movieFilter.toLowerCase())
  //   );
  // }, [movieFilter, movies]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {movies.length && <MovieList movies={movies} />}
      {error && <p>Opps</p>}
    </>
  );
};
export default MoviesPage;
