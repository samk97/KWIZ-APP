import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login_page from "./main_modules/Login_page";
import Signup_page from "./main_modules/Signup_page";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login_page />}></Route>
      <Route path="/sign-up" element={<Signup_page />}></Route>
    </Routes>
  );
}

export default App;
