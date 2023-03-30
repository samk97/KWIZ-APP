import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./main_modules/LoginPage";
import SignuPage from "./main_modules/SignupPage";
import AdminQuestions from "./main_modules/AdminQuestions";
import AdminCreateQuestions from "./main_modules/AdminCreateQuestions";
import AdminCreateQuiz from "./main_modules/AdminCreateQuiz";
import AdminHistory from "./main_modules/AdminHistory";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignuPage />} />
      <Route path="/admin">
        <Route path="questions" element={<AdminQuestions />} />
        <Route path="create_questions" element={<AdminCreateQuestions />} />
        <Route path="create_quiz" element={<AdminCreateQuiz />} />
        <Route path="history" element={<AdminHistory />} />
      </Route>
    </Routes>
  );
}

export default App;
