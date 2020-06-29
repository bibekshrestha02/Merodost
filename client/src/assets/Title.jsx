import React from "react";
import style from "./style/assestsStyle.module.scss";
export default function Title(props) {
  return (
    <div className={style.Title}>
      <span>{props.Title}</span>
    </div>
  );
}
