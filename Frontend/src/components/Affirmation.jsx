import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Affirmation.module.css";
import ReactLoading from "react-loading"
import image from "../assets/background1.jpg";
import { BiCategory } from "react-icons/bi";
import { GoHeart } from "react-icons/go";

function Affirmation() {
  const [affirmation, setAffirmation] = useState("");
  // const [Translation, setTranslation] = useState("");
  const [favorite, setFavorite] =useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //Getting username
  const username = "ayebs";

  useEffect(() => {
    getRandomAffirmation();
  }, []);

  const getRandomAffirmation = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/affirmations/random");
      if (!response.ok) {
        throw new Error("Network error")
      }

      const data = await response.json();
      setAffirmation(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  // const translateAffirmation = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/affirmations/translate", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ affirmation }),
  //     });
  //     const data = await response.json();
  //     setTranslation(data.translated);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleCategories = () => {
    navigate("/collections");
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ReactLoading type="spokes" color="purple" height={100} width={80} />
      </div>
    )  
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={style.affirm_container}>
      <div className={style.greeting}>
        <img src={image} alt="" />
        <p>Bonjour, Name</p>
      </div>

      <div className={style.affirmation}>
        {affirmation ? (
          <>
            <p>{affirmation.text}</p>
            <p>Scripture 1:10</p>
          </>
        ) : (
          <p>No affirmation found</p>
        )}
      </div>

      <div className={style.btns}>
        <button onClick={getRandomAffirmation}>New Affirmation</button>
        <button>
          <GoHeart />
        </button>
        <button>Translate</button>
      </div>

      <div className={style.category} onClick={handleCategories}>
        <button>
          <BiCategory />
        </button>
        <span>Collections</span>
      </div>
    </div>
  );
}

export default Affirmation;
