import React from "react";
import Add from "../images/addAvatar.png";

const Login = () => {
  return (
    <div className={"formContainer"}>
      <div className={"formWrapper"}>
        <span className="logo">BGOPC Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <button /* type="submit" */>Login</button>
        </form>
        <p>You don't have an account? Sign Up</p>
      </div>
    </div>
  );
};

export default Login;
