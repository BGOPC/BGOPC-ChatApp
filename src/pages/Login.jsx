import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [error, setErr] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className={"formContainer"}>
      <div className={"formWrapper"}>
        <span className="logo">BGOPC Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" name="email"/>
          <input type="password" placeholder="Password" name="password"/>
          <button>Login</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/signup" style={{textDecoration: "none"}}> SignUp </Link></p>
      </div>
    </div>
  );
};

export default Login;
