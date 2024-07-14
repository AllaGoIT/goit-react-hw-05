import { NavLink, Route,Routes } from "react-router-dom";
import clsx from "clsx";
import css from "../../pages/HomePage/HomePage.module.css";


const buildLimkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active)
};

const Novigation = () => { 
    return (
        <div>
            <nav>
                <NavLink to="/" className={buildLimkClass}>Home</NavLink>
                <NavLink to="/movies" className={buildLimkClass}>Movies</NavLink>
            </nav>
            <Routes>
                <Route/>
            </Routes>
        </div>
    )
};

export default Novigation;
