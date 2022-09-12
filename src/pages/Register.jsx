import React from "react";
import Add from "../images/addAvatar.png";

const Register = () => {
  return (
    <div className={"formContainer"}>
      <div className={"formWrapper"}>
        <span className="logo">BGOPC Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="NickName"/>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="Add Avatar" />
            <span>Add an avatar</span>
          </label>
          <button /* type="submit" */>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
