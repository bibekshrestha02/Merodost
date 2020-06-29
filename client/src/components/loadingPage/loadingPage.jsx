import React from "react";
import style from "./style.module.scss";
export default function LoadingPage() {
  return (
    <div className={style.LoadingPage}>
      <div className={`${style.spinnerbox}`}>
        <div className={`${style.pulsecontainer}`}>
          <div className={`${style.pulsebubble} ${style.pulsebubble1}`}></div>
          <div className={`${style.pulsebubble} ${style.pulsebubble2}`}></div>
          <div className={`${style.pulsebubble} ${style.pulsebubble3}`}></div>
        </div>
      </div>
    </div>
  );
}
