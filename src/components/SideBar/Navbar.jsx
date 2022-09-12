import React from 'react';
import UnknownUser from "../../images/unknown.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">BGOPC Chat</span>
      <div className="user">
        <img src={UnknownUser} alt="User" />
        <span>Username</span>
        <button>LogOut</button>
      </div>
    </div>
  )
}

export default Navbar