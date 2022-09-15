import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, storage, db } from "../firebase";
import Add from "../images/addAvatar.png";
import { useNavigate, Link } from "react-router-dom";
const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    const userFile = e.target.file.files[0];

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      const date = new Date().getTime();
      const storageRef = ref(storage, `${userName + date}`);

      const uploadTask = uploadBytesResumable(storageRef, userFile);
      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: userName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              userName,
              userEmail,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChat", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  return (
    <div className={"formContainer"}>
      <div className={"formWrapper"}>
        <span className="logo">BGOPC Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="NickName" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <input
            required
            style={{ display: "none" }}
            type="file"
            id="file"
            name="file"
            accept="image/*"
          />
          <label htmlFor="file">
            <img src={Add} alt="Add Avatar" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {error && <span>Something Went Wrong</span>}
        </form>
        <p>
          You do have an account?{" "}
          <Link
            to="/login"
            style={{
              textDecoration: "none",
            }}
          >
            {" "}
            Login{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
