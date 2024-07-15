import MovieList from "../../components/MovieList/MovieList";
import Novigation from "../../components/Navigation/Novigation";

const HomePage = () => {
  return (
    <>
      <h1>Trending today</h1>
      <Novigation />
      <MovieList />
    </>
  );
};
export default HomePage;
