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
      <h1>Welcome</h1>
      <h3>"Je pense donc je suis!"</h3>
      <div className={style.btn}>
        <button onClick={handleStart}>Get started</button>
      </div>
    </div>
  );
}

export default Welcome;
