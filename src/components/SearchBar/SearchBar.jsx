/** @format */

import PropTypes from "prop-types";
import style from "./SearchBar.module.css";

export default function SearchBar({onSubmit}) {
  return (
    <form onSubmit={onSubmit} className={style.form}>
      <input
        type="text"
        name="movieName"
        placeholder="Enter the title to search"
        autoComplete="off"
        autoFocus
        autoFocus
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        className={style.input}
      />
      <button type="submit" className={style.btn}>
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
