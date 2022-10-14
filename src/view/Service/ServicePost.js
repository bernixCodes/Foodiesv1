import React, { useState } from "react";
import { serviceData } from "./serviceData";
import style from "./service.module.css";

function ServicePost() {
  const [posts] = useState(serviceData);
  console.log(posts);
  return (
    <div className={style.service__container}>
      {posts.map((post) => (
        <div key={post.id} className={style.service_post}>
          <img src={post.imageSrc} alt="" className={style.service__img} />
          <h2>{post.title}</h2>
          <p className={style.service_post_p}>{post.message}</p>
        </div>
      ))}
    </div>
  );
}

export default ServicePost;
