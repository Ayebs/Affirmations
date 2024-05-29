import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import style from "./Personalize.module.css";
import { useNavigate } from "react-router-dom";

function Name() {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate('/gender')
  }

  return (
    <div className={style.name_container}>
      <div className={style.name_question}>
        <p>First, let's personalize your experience.</p>
        <p>How do you want to addressed in your affirmations?</p>
      </div>
      <div className={style.name}>
        <input type="text" placeholder="Your name" />
        <button onClick={handleNextPage}>
          <GrFormNextLink />
        </button>
      </div>
    </div>
  );
}

export default Name;
