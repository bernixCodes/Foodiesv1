import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import heroImg from "../../images/hero.png";
import award from "../../images/award.png";
import food from "../../images/food.jpg";
import res from "../../images/res.jpg";

import style from "./index.module.css";
import Layout from "../_layout";
import Service from "./../Service/Index";
import MenuOptions from "./../../components/MenuOptions/index";
import MenuDetail from "../../components/MenuOptions/MenuDetail";
import Contact from "./../../components/Contact/index";
function Home() {
  return (
    <Layout>
      {/* Home */}
      <div className={style.home__container}>
        <div className={style.home__left}>
          <h2 className={style.home__header}>
            Special Food Every Time For You and The Fastest Delivery In Your
            City
          </h2>
          <p className={style.home__subtitle}>
            Be the fastest in delivering your healthy food and with us order
            your best food anytime and anywhere. We got You.
          </p>

          <div className={style.home__btns}>
            <button className={style.home__getStarted}>Get started </button>
            <div className={style.home__play}>
              <AiOutlinePlayCircle className={style.home__playIcon} />
              <p>Order process</p>
            </div>
          </div>

          <div className={style.home__reviews}>
            <div className={style.home__imgdiv}>
              <img src={award} alt="" className={style.home__img} />
              <p>240k Reviews</p>
            </div>
            <div className={style.home__imgdiv}>
              <img src={res} alt="" className={style.home__img} />
              <p>2500+ Restaurants </p>
            </div>
            <div className={style.home__imgdiv}>
              <img src={food} alt="" className={style.home__img} />
              <p>6000+ Food Items</p>
            </div>
          </div>
        </div>

        <div>
          <img src={heroImg} alt="" className={style.home__heroImg} />
        </div>
      </div>
      {/* Services */}
      <Service />
      {/* Menu */}
      <MenuOptions />
      {/* Menu Details */}
      <MenuDetail />
      {/* Contact */}
      <Contact />
    </Layout>
  );
}

export default Home;
