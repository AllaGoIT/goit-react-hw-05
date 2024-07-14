import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../films-api";
const HomePage = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrending() {
      try {
        setError(null);
        await fetchTrendingMovies () {};
      } catch {
      } 
    }
    fetchTrending();
  }, []);

  return <></>;
};
export default HomePage;
