import React, { useEffect, useState } from "react";
import style from "./General.module.css";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom"
import "../App.css"


function General() {
  const [affirmations, setAffirmations] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    getAllAffirmations();
  }, []);

  const getAllAffirmations = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/affirmations/all"
      );
      if (!response.ok) {
        throw new Error("Network error");
      }

      const data = await response.json();
      setAffirmations(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ReactLoading type="spokes" color="purple" height={100} width={80} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const routeBack = () => {
    navigate("/collections")
  }
  
 
  return (
    <div className={style.affirmations}>
        <h3>All affirmations</h3>
        {affirmations.length > 0 ? (
          <ul>
            {affirmations.map((affirmation, index) => (
              <li key={index}>{affirmation.text}</li>
            ))}
          </ul>
        ) : (
          <p>No affirmation found</p>
        )}

        <div className="btns">
            <button onClick={routeBack}>Back</button>
        </div>
    </div>
  );
}

export default General;
