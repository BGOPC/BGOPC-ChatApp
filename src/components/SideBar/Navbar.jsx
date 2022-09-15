import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase';
import UnknownUser from "../../images/unknown.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">BGOPC Chat</span>
      <div className="user">
        <img src={UnknownUser} alt="User" />
        <span>Username</span>
        <button onClick={()=>signOut(auth)}>LogOut</button>
      </div>
    </div>
  )
}

export default Navbar