/** @format */

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchMovieCast} from "../../api-TMDB";
import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import style from "./MovieCast.module.css";

export default function MovieCast() {
  const [loading, setLoading] = useState(false);
  const [castList, setCastList] = useState([]);
  const {movieId} = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieCast(movieId);
        setCastList(data.cast);
      } catch (error) {
        toast.error(
          "Whoops. Something went wrong! Please try reloading this page!"
        );
      } finally {
        setLoading(false);
      }
    };

    getMovieCast();
  }, [movieId]);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <ul className={style["cast-list"]}>
      {loading ? (
        <Loader />
      ) : castList.length > 0 ? (
        castList.map(({id, name, profile_path, character}) => (
          <li key={id} className={style["list-item"]}>
            <div className={style["img-container"]}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : defaultImg
                }
                alt={name}
                loading="lazy"
                width="120"
              />
            </div>
            <h3 className={style.name}>{name}</h3>
            <p className={style.character}> Character: {character}</p>
          </li>
        ))
      ) : (
        <p>Sorry, there isn't any info :(</p>
      )}
    </ul>
  );
}
