import React from "react";
import style from "./index.module.css";
import logo from "../../images/contact.png";
import { AiFillQuestionCircle } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

function Contact() {
  return (
    <div className={style.contact__container}>
      <div className={style.contact__left}>
        <h2>Get the best promos order now before they run out!</h2>
        <p>
          Our promo is running for just 3 months! Just because we love you. Get
          yours before it's too late, our cherished customer!
        </p>
        <img src={logo} alt="" className={style.contact__logo} />
      </div>

      <div className={style.contact__right}>
        <div className={style.dataList}>
          <AiFillQuestionCircle />
          <input list="reason" placeholder="Reason for contacting us.." />
          <datalist id="reason">
            <option value={"Enquire on ordering"} />
            <option value={"Make a special order"} />
            <option value={"Work with us"} />
            <option value={"Give a suggesstion"} />
            <option value={"Give feedback"} />
            <option value={"Others"} />
          </datalist>
        </div>

        <div className={style.contact__user}>
          <AiOutlineUserAdd />
          <input type={"text"} placeholder="Name" />
        </div>
        <div className={style.contact__user}>
          <AiOutlineMail />
          <input type={"email"} placeholder="Email" />
        </div>
        <div className={style.contact__user}>
          <BsTelephone />
          <input type={"text"} placeholder="Phone" />
        </div>
        <button className={style.contact__btn}>Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
