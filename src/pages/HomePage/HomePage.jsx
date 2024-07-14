import MovieList from "../../components/MovieList/MovieList";
import Novigation from "../../components/Navigation/Novigation";
const HomePage = () => {
  return (
    <>
      <Novigation />
      <h1>Trending today</h1>
      <MovieList />
    </>
  );
};
export default HomePage;
