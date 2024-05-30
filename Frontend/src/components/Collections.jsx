import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search.jsx";
import style from "./Categories.module.css";

function Collections() {
  const navigate = useNavigate();

  const handleGeneralAffirmations = () => {
    navigate("/general");
  };

  return (
    <div className={style.categories_box}>
      <div className={style.title}>
        <h3>Collections</h3>
        <Search />
      </div>

      <div className={style.categories}>
        <div className={style.general}>
          <p onClick={handleGeneralAffirmations}>General Affirmations</p>
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

export default Collections;
