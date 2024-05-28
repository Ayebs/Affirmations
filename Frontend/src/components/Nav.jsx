import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Nav.module.css'
import { MdHome } from "react-icons/md";


function Nav() {
  return (
    <nav className={style.nav}>
    
      <div className={style.nav_items}>
        <NavLink to="/" className={({ isActive }) => isActive ? style.active : "" }>
          <MdHome className={style.nav_icon} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/name" className={({ isActive}) => isActive ? style.active : "" }>
          <span>Name</span>
        </NavLink>
        <NavLink to="/gender" className={({ isActive}) => isActive ? style.active : "" }>
          <span>Gender</span>
        </NavLink>
        <NavLink to="/affirmation" className={({ isActive}) => isActive ? style.active : "" }>
          <span>Affirmation</span>
        </NavLink>
        <NavLink to="/categories" className={({ isActive}) => isActive ? style.active : "" }>
          <span>Collections</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav