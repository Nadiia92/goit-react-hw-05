/** @format */

import {useSearchParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {fetchSearchMovie} from "../../api-TMDB";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import style from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("movieName") ?? "";
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieName) return;
    setMoviesList([]);
    setLoading(true);
    const getMovieSearch = async (movieName) => {
      try {
        const data = await fetchSearchMovie(movieName);
        if (!data.results.length) {
          setError(true);
          toast.error(
            "There are no movies with this request. Please, try again"
          );
          return;
        }
        setMoviesList(data.results);
      } catch (error) {
        setError(true);
        console.log(error);
        toast.error(
          "Whoops. Something went wrong! Please try reloading this page!"
        );
      } finally {
        setLoading(false);
        setError(false);
      }
    };
    getMovieSearch(movieName);
  }, [movieName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    const newMovieName = searchForm.elements.movieName.value.trim();
    if (!newMovieName) {
      toast.error("Please enter a keyword!");
      return;
    }
    setSearchParams({movieName: newMovieName});
    searchForm.reset();
  };

  return (
    <div className={style.container}>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <p>There is no movies with this request. Please, try again</p>}
      <MovieList movies={moviesList} />
    </div>
  );
}
