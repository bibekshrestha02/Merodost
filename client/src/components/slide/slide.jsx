import React from "react";
import style from "./style/slide.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function slide() {
  return (
    <>
      <div className={`${style.rows} ${style.slideStyle}`}>
        <div className={`col-lg-5 col-sm-12  text-center ${style.main}`}>
          <span className={style.saying}>
            LIMITS ARE ONLY IN THE IMAGINATION
          </span>
          <br />
          <span className={style.subSaying}>
            We build tools that change the way you think.
          </span>
        </div>

        <div className={`${style.slide} col-lg-7 col-sm-12`}></div>
      </div>
    </>
  );
}
