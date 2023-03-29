import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login_page from "./main_modules/Login_page";
import Signup_page from "./main_modules/Signup_page";
import Admin_main from "./main_modules/Admin_main";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login_page />}></Route>
      <Route path="/signup" element={<Signup_page />}></Route>
      <Route path="/admin_main" element={<Admin_main />}></Route>
    </Routes>
  );
}

export default App;
