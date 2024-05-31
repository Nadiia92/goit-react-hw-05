/** @format */

import {useEffect, useState} from "react";
import {fetchTrendMovies} from "../../api-TMDB";
import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import style from "./HomePage.module.css";

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getTrendMovies() {
      try {
        setLoading(true);
        const data = await fetchTrendMovies();
        setTrendMovies(data.results);
        setLoading(false);
      } catch (error) {
        toast.error(
          "Whoops. Something went wrong! Please try reloading this page!"
        );
      } finally {
        setLoading(false);
      }
    }
    getTrendMovies();
  }, []);
  return (
    <div className={style.container}>
      <h1 className={style.title}>Trending today</h1>
      {loading && <Loader />}
      <MovieList movies={trendMovies} />
    </div>
  );
}
