/** @format */

import PropTypes from "prop-types";
import MovieItem from "../MovieItem/MovieItem";
import style from "./MovieList.module.css";

export default function MovieList({movies}) {
  return (
    <ul className={style.container}>
      {movies.map((movie) => (
        <li className={style.item} key={movie.id}>
          <MovieItem movie={movie} />
        </li>
      ))}
    </ul>
  );
}
MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
