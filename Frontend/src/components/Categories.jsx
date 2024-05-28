import React from "react";
import Search from "./Search.jsx";
import style from "./Categories.module.css";

function Categories() {
  return (
    <div className={style.categories_box}>
      <div className={style.title}>
        <h3>Collections</h3>
        <Search />
      </div>

      <div className={style.categories}>
        <div className={style.general}>
          <p>General Affirmations</p>
        </div>

        <div className={style.favorites}>
          <p>Favorites</p>
        </div>

        <div className={style.own_affirmations}>
          <p>My own affirmations</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
