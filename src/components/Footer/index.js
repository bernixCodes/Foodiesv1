import React from "react";
import { BiGift } from "react-icons/bi";
import style from "./index.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer__top}>
        <div className={style.footer__logo}>
          <BiGift style={{ color: "#ff6262", fontSize: "1.5rem" }} />
          <h3>Foodies</h3>
        </div>
        <div className={style.footer__topList}>
          <p>Services</p>
          <p>Home</p>
          <p>Contacts</p>
          <p>Programs</p>
        </div>
      </div>

      <hr></hr>
      <div className={style.footer__bottom}>
        <p>Copyright @ 2022 | All Rights Reserved</p>
        <p>Security | Privacy | Terms</p>
      </div>
    </div>
  );
}

export default Footer;
