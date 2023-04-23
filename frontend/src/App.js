import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./main_modules/LoginPage";
import SignuPage from "./main_modules/SignupPage";
import AdminQuestions from "./main_modules/AdminQuestions";
import AdminCreateQuestions from "./main_modules/AdminCreateQuestions";
import AdminCreateQuiz from "./main_modules/AdminCreateQuiz";
import AdminHistory from "./main_modules/AdminHistory";
import SideNav from "./components/SideNav";
import PreviewPage from "./main_modules/PreviewPage";
import StudentSideNav from "./components/StudentSideNav";
import StudentAttemptQuiz from "./main_modules/StudentAttemptQuiz";
import StudentQuiz from "./main_modules/StudentQuiz";
import { useDispatch } from "react-redux";
import QuizDetails from "./main_modules/QuizDetails";

function App() {
  const [open, setOpen] = useState(true);
  console.log("Refreshed");
  let dispatch = useDispatch();
  const payload= JSON.parse(localStorage.getItem("user"));
 

  console.log(payload);
  
  dispatch({
    type: "LOGGED_IN_USER",
    payload
  });



  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignuPage />} />
      {/* <Route path="/preview" element={<PreviewPage />} /> */}
     <Route
        path="/admin"
        element={<SideNav open={open} onOpen={() => setOpen(!open)} />}
      >
        <Route path="questions" element={<AdminQuestions open={open} />} />
        <Route
          path="create_questions"
          element={<AdminCreateQuestions open={open} />}
        />
        <Route path="create_quiz" element={<AdminCreateQuiz open={open} />} />
        <Route path="history" element={<AdminHistory open={open} />} />
        <Route path="preview" element={<PreviewPage open={open} />} />
        <Route
          path="quiz_details"
          element={<QuizDetails open={open} />}
        ></Route>
      </Route>
      <Route
        path="/dashboard"
        element={<StudentSideNav open={open} onOpen={() => setOpen(!open)} />}
      >{console.log(payload)}
        <Route
          path="attempt_quiz"
          element={<StudentAttemptQuiz open={open} />}
        />

        {/* Component pending */}
        <Route
          path="quizzes_attempted"
          element={<AdminCreateQuestions open={open} />}
        />

        {/* Component pending */}
        <Route
          path="quizzes_missed"
          element={<AdminCreateQuiz open={open} />}
        />
        {/* Component Pending */}
        <Route path="history" element={<AdminHistory open={open} />} />
      </Route>

      <Route path="/quiz" element={<StudentQuiz />}></Route>
    </Routes>
  );
}

export default App;
