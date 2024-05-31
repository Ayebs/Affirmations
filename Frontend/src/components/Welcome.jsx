import React from "react";
import Nav from "./Nav.jsx";
import "../App.css";
import style from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";


function Welcome() {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate("/name")
  }

  return (
    <div className={style.Welcome}>
      <div className={style.Welcome_text}>
      <h1>Welcome</h1>
      <h3>"Je pense donc je suis!"</h3>
      <div className="btns">
        <button onClick={handleStart}>Get started</button>
      </div>
      </div>
    </div>
  );
}

export default Welcome;
