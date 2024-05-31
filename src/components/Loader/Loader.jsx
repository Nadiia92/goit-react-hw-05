/** @format */

import {CirclesWithBar} from "react-loader-spinner";
import style from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={style.loader}>
      <CirclesWithBar
        className={style.grid}
        height="60"
        width="60"
        color="#ffd700"
        outerCircleColor="#00ffff"
        innerCircleColor="#0000cd"
        barColor="#00ff00"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
