import React from "react";
import style from "./Personalize.module.css";
import { GrFormNextLink } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function Gender() {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/affirmation");
  };

  return (
    <div className={style.gender_container}>
      <div className={style.gender_text}>
        <h3>Nice having you here, Name</h3>
        {/* <h5>What are your pronouns?</h5> */}
        <p>Some affirmations will use your pronouns or gender</p>
      </div>

      <h5>What is your gender?</h5>
      <div className={style.gender_options}>
        <button>Male</button>
        <button>Female</button>
        <button>Other</button>
      </div>
      <button className="btns" onClick={handleNextPage}>
        <GrFormNextLink />
      </button>
    </div>
  );
}

export default Gender;
