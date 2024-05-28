import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Affirmation.module.css";
import image from "../assets/background1.jpg";
import { BiCategory } from "react-icons/bi";
import { GoHeart } from "react-icons/go";

function Affirmation() {

    const navigate = useNavigate();

    const handleCategoriesClick = () => {
      navigate("/categories");
    };

  return (
    <div className={style.affirm_container}>
      <div className={style.greeting}>
        <img src={image} alt="" />
        <p>Bonjour, Name</p>
      </div>

      <div className={style.affirmation}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque!</p>
        <p>Scripture 1:10</p>
      </div>

      <div className={style.btns}>
        <button>New Affirmation</button>
        <button>
          <GoHeart />
        </button>
        <button>Translate</button>
      </div>

      <div className={style.category}  onClick={handleCategoriesClick}>
        <button>
          <BiCategory />
        </button>
        <span>Collections</span>
      </div>
    </div>
  );
}

export default Affirmation;
