import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../../components/Navigation/Navigation.module.css";

const buildLimkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <div className={css.container}>
      <nav>
        <NavLink to="/" className={buildLimkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLimkClass}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
