import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./styles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const {currentUser} =  useContext(AuthContext);
  console.log(currentUser)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route index element={ <Home/> }/>
            <Route path="login" element={ <Login/> }/>
            <Route path="signup" element={ <Register /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
