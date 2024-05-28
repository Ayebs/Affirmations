import React from "react";
import Nav from "./Nav.jsx";
import "../App.css";
import style from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={style.Welcome}>
      <h1>Welcome</h1>
      <h5>"Je pense donc je suis!"</h5>
      <div className={style.btn}>
        <button>Get started</button>
      </div>
    </div>
  );
}

export default Welcome;
