import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import { fetchSearchMovie } from "../../films-api";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);

  const movieFilter = searchParams.get("movie") ?? "";
  const changeMovieFilter = (newMovie) => {
    searchParams.set("movie", newMovie);
    setSearchParams(searchParams);
  };
  useEffect(() => {
    if (!query) return;
    async function fetchSearchMovies() {
      try {
        setError(false);
        const { results, total_pages } = await fetchSearchMovie(query);
        setMovies((prevMovies) => [...prevMovies, ...results]);
        setVisible(total_pages > 0);
      } catch {
        setError(true);
      }
    }
    fetchSearchMovies();
  }, [query]);

  const addMovies = (value) => {
    setQuery(value);
    setMovies([]);
  };

  const filterMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(movieFilter.toLowerCase())
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ moviesname: form.elements.name.value });
    form.reset();
  };
  return (
    <>
      <SearchForm
        onSearch={changeMovieFilter}
        onFilter={filterMovies}
        onSubmit={handleSubmit}
      />
      {visible && <MovieList onAdd={addMovies} />}
      {error && <p>Opps</p>}
    </>
  );
};
export default MoviesPage;
