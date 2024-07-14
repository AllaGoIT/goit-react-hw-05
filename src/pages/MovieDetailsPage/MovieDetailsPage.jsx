import { Routes, Route } from "react-router-dom";
import MovieCast from "path/to/pages/MovieCast";
import MovieReviews from "path/to/pages/MovieReviews";

const MovieDetailsPage = () => { 
    return (
        <Routes>
            <Route path="/movies/movieId:cast" element={<MovieCast />} />
            <Route path="/movies/movieId:reviews" element={<MovieReviews/> } />
        </Routes>
    )
};

export default MovieDetailsPage;