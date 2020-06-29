import React from "react";
import style from "./style/cards.module.scss";
import Title from "./../../assets/Title";
import Card from "./card/card";
export default function Cards(props) {
  return (
    <div className={style.Cards}>
      <Title Title={props.Title} />
      <div className={`${style.rows} container-fluid pt-5`}>
        {props.blogs.map((blog, i) => {
          return (
            <div key={i} className={`col-lg-3 col-sm-12 ${style.itemsAlign}`}>
              <Card
                photo={blog.photo}
                title={blog.title}
                summery={blog.summery}
                id={blog._id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
