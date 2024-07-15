import { Outlet, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  return (
    <>
      <h1>MovieDetailsPage {movieId}</h1>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
