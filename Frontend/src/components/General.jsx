import React, { useEffect, useState } from "react";
import style from "./General.module.css"
function General() {
  const [affirmations, setAffirmations] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={style.affirmations}>
      <div className={style.affirmation}>
        <p>All affirmations</p>
        {affirmations.length > 0 ? (
          <ul>
            {affirmations.map((affirmation, index) => (
              <li key={index}>{affirmation.text}</li>
            ))}
          </ul>
        ) : (
          <p>No affirmation found</p>
        )}
      </div>
    </div>
  );
}

export default General;
