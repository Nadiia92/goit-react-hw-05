/** @format */

import PropTypes from "prop-types";
import {Link, useLocation} from "react-router-dom";
import style from "./MovieItem.module.css";

export default function MovieItem({movie}) {
  const location = useLocation();
  const {id, poster_path, title} = movie;
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div>
      <Link to={`/movies/${id}`} state={location} className={style.container}>
        <img
          className={style.image}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
        />
      </Link>
      <p className={style.title}>{title}</p>
    </div>
  );
}
MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
