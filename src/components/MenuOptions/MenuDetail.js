import React from "react";
import chicken from "../../images/test.jpg";
import burger from "../../images/burger.png";
import user from "../../images/user.png";
import { AiFillStar } from "react-icons/ai";
import style from "./menu.module.css";

function MenuDetail() {
  return (
    <div className={style.menu__detail_container}>
      <div className={style.menu_images}>
        <div className={style.menu__detail_bg}>
          <img src={chicken} alt="" />
          <div className={style.menu__burger}>
            <img src={burger} alt="" />
          </div>
        </div>
      </div>

      <div className={style.menu__detail_right}>
        <div className={style.menu_pos}>
          <h2>What our customers say about foodies</h2>
          <div className={style.menu__review_div}>
            <div className={style.menu__user_review}>
              <img src={user} alt="" />
            </div>
            <div className={style.users_info}>
              <h5>Amazing Grace</h5>
              <p>University Lecturer</p>
            </div>
          </div>
          <p>
            The burgers are really delicious and wonderfull. You know, it is
            really amazing trying that the first day. I nearly bit my fingers!
            Couldn't believe there was still mighty goodness in the world.
          </p>
          <div className={style.review__grade}>
            <div style={{ color: "gold" }}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p>4.8 (120K Reviews)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDetail;
