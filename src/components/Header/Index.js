import { BiGift } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { CgToolbox } from "react-icons/cg";
import { BsDot } from "react-icons/bs";
import style from "./index.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showServicesMenu, setServicesMenu] = useState(false);
  const [showMenu, setMenu] = useState(false);

  return (
    <>
      <div className={style.nav__container}>
        <div className={style.logo__section}>
          <BiGift className={style.icon} style={{ color: "#ff6262" }} />
          <h3>Foodies</h3>
        </div>

        <ul className={style.nav__items}>
          <li>Home</li>

          <li
            onMouseEnter={() => setServicesMenu(true)}
            onMouseLeave={() => setServicesMenu(false)}
          >
            <div className={style.nav__services}>
              Services
              <IoIosArrowDown className={style.nav__arr} />
            </div>
            <div className={style.pos}>
              <ul
                className={
                  showServicesMenu
                    ? style.services__subShow
                    : style.services__sub
                }
              >
                <li>
                  <Link to="customerServices">Customer</Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            onMouseEnter={() => setMenu(true)}
            onMouseLeave={() => setMenu(false)}
          >
            <div className={style.nav__services}>
              Menu
              <IoIosArrowDown className={style.nav__arr} />
            </div>
            <div className={style.pos}>
              <ul className={showMenu ? style.menu__subShow : style.menu__sub}>
                <li>Breakfast</li>
                <li>Lunch</li>
                <li>Supper</li>
              </ul>
            </div>
          </li>
          <li>Contact</li>
        </ul>

        <div className={style.nav__actions}>
          <RiSearchLine className={style.nav__search} />
          <div className={style.nav__toolbox}>
            <CgToolbox />
            <BsDot className={style.dot} />
          </div>
          <button className={style.nav__btn}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Header;
