import React from 'react';
import ncss from './Navbar.module.css';
import BestFriendsContainer from "./FriendsBar/BestFriendsContainer"
import {NavLink} from "react-router-dom";

const Navbar =(props)=>{
  
    return <nav className={ncss.nav}>
    <div className={ncss.navbutton}>
      <NavLink to="/profile" activeClassName={ncss.active}>Profile</NavLink>
    </div>
    <div className={ncss.navbutton}>
      <NavLink to="/messages" activeClassName={ncss.active}>Messages</NavLink>
    </div>
    <div className={ncss.navbutton}>
      <NavLink to="/news" activeClassName={ncss.active}>News</NavLink>
    </div>
    <div className={ncss.navbutton}>
      <a >Music</a>
    </div>
    <div className={ncss.navbutton}>
      <NavLink to="/users" activeClassName={ncss.active}>Users</NavLink>
    </div>
    <div className={ncss.bestfriendsbar}>
    <BestFriendsContainer 
    />
    </div>
  </nav>
}

export default Navbar