/** @format */

import {NavLink} from "react-router-dom";
import clsx from "clsx";
import style from "./Navigation.module.css";

const getLinkClass = ({isActive}) => {
  return clsx(style.link, isActive && style.active);
};

export default function Navigation() {
  return (
    <nav className={style.nav}>
      <ul className={style.container}>
        <li>
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={getLinkClass}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
