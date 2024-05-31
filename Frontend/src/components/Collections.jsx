import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search.jsx";
import style from "./Collections.module.css";
import "../App.css"

function Collections() {
  const navigate = useNavigate();

  const handleGeneralAffirmations = () => {
    navigate("/general");
  };

  const routeToFavorites = () => {
    navigate("/fav")
  }

  const handleMyAffirmations = () => {
    navigate("/myaffirmations");
  };

  return (
    <div className={style.categories_box}>
      <div className={style.title}>
        <h3>Collections</h3>
        <Search />
      </div>

      <div className={style.categories}>
        <div className={style.general}>
          <p className="glass" onClick={handleGeneralAffirmations}>General Affirmations</p>
        </div>

        <div className={style.favorites}>
          <p onClick={routeToFavorites}>Favorites</p>
        </div>

        <div className={style.own_affirmations}>
          <p className="glass" onClick={handleMyAffirmations}>My own affirmations</p>
        </div>
      </div>
    </div>
  );
}

export default Collections;
