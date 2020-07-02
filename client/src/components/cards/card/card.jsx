import React from "react";
import style from "./../style/cards.module.scss";
import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    <div className={style.card}>
      <img
        className='card-img-top'
        src={props.photo}
        alt={props.title}
        width='200px'
      />
      <div className={`pt-1 pl-1 pr-1 ${style.cardbody}`}>
        <h5 className={`card-title ${style.title}`}>
          {`${props.title}`.toLocaleUpperCase()}
        </h5>
        <p className='card-text'>{props.summery}</p>
      </div>
      <div className='pl-1'>
        <Link
          to={{
            pathname: "/blog",
            search: `?id=${props.id}`,
          }}>
          <span className='btn btn-primary mt-3 mb-3'>Read More</span>
        </Link>
      </div>
    </div>
  );
}
