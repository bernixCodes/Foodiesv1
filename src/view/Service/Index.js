import React from "react";
import ServicePost from "./ServicePost";
import style from "./index.module.css";

function Service() {
  return (
    <div className={style.service__main}>
      <div className={style.service__headerDiv}>
        <h2 className={style.service__header}>
          How we can serve you and <br></br> deliver your favorite food
        </h2>
        <p className={style.service__p}>
          We always provide the best service for you and deliver your favorite
          food to your destination.
        </p>
      </div>

      <ServicePost />
    </div>
  );
}

export default Service;
