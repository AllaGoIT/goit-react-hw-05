import { Routes, Route } from "react-router-dom";
import HomePage from "path/to/pages/HomePage";
import MovieDetailsPage from "path/to/pages/MovieDetailsPage";
import MoviesPage from "path/to/pages/MoviesPage";
import NotFoundPage from "path/to/pages/NotFoundPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
                <Route path="*" element={<NotFoundPage/> } />
            </Routes>
        </div>
    )
 };

export default App;