import React from 'react'
import { useNavigate } from 'react-router-dom'

function OwnAffirmations() {
    const navigate = useNavigate();

    const routeBack = () => {
        navigate("/collections")
    }

  return (
    <div>
        <h3>Add your own affirmations here</h3>
        <div className="btns">
            <button onClick={routeBack}>Back</button>
        </div>
    </div>
  )
}

export default OwnAffirmations