import React from 'react'
import { useNavigate } from 'react-router-dom'

function Favorites() {
    const navigate = useNavigate()

    const routeBack = () => {
        navigate("/collections")
    }
  return (
    <div>
        <p>Favorites</p>
        <div className="btns">
            <button onClick={routeBack}>Back</button>
        </div>
    </div>
  )
}

export default Favorites