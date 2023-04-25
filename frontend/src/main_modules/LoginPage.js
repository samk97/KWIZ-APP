import MajorSide from "../components/MajorSide";
import MinorSide from "../components/MinorSide";
import Form from "../components/Form";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase-auth/firebase";
import { signInWithEmailAndPassword, } from "firebase/auth";
function LoginPage() {
  const formLabel = "Log in";
  const buttonLabel = "Sign in";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();

  const state = useSelector((state) => ({ ...state }));
  console.log(state);

  useEffect(() => {
    if (state && state.user) {
      if (state.user.role == "student") navigate("/dashboard");
      else navigate("/admin");
    }
  });

  const goToSignUp = () => {
    navigate("/signup");
  };

  const Login = async (e) => {
    e.preventDefault();
    // let items = { email, name, password };

    try{
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user.emailVerified);

    if (user.emailVerified) {
      const res = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          email: email,
          password: password,
        },
      });
      if (res.status === 200) {
        const data = await res.json();
        // console.log(data);
        const payload = {
          email: email,
          role: data.role,
        };
        // navigate("/")

        dispatch({
          type: "LOGGED_IN_USER",
          payload,
        });
        localStorage.setItem("user", JSON.stringify(payload));

        if (data.role === "student") {
          navigate("/dashboard");
        } else if (data.role === "teacher") {
          navigate("/admin/questions");
        }
      } else {
        alert("Wrong Password");
      }
    }
    else{
      alert("verify your email !!");
    }
  }
  catch(error){
      alert(error.message);
  }


  };
  return (
    <>
      <div className="flex w-full h-screen">
        <MajorSide>
          <Form formLabel={formLabel}>
            {/* ID */}
            <InputField
              labelHtmlFor="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-green"
              labelPlaceHolder="e-mail"
              inputType="text"
              inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              inputPlaceholder="Enter e-mail"
            ></InputField>

            {/* password */}
            <InputField
              labelHtmlFor="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-green"
              labelPlaceHolder="Password"
              inputType="password"
              inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              inputPlaceholder="•••••••••••••"
            ></InputField>

            {/* Forgot Password */}
            <div className="px-3">
              <Link to="/forgot_password">
                <span className="text-xs sm:text-sm text-blue-500 cursor-pointer">
                  Forgot Password ?
                </span>
              </Link>
            </div>

            {/* submit button */}
            <Button
              ButtonType="submit"
              onClick={Login}
              buttonClassName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center min-w-[4rem] max-w-[6rem] w-4/12 m-2"
              buttonLabel={buttonLabel}
            ></Button>
          </Form>

          {/* Only For small devices - sign up */}
          <div className="sm:hidden bg-red-100 absolute right-0 top-0">
            <span className="text-sm cursor-default">New here?</span>
            <span
              className="font-bold m-1 text-sm text-blue-800 cursor-pointer"
              onClick={goToSignUp}
            >
              Sign Up
            </span>
          </div>
        </MajorSide>

        <MinorSide
          text1="New Here?"
          text2="Sign up and take your quizzes here."
          text3="Choose from a variety of questions or add your own."
          buttonLabel="Sign up"
          onClick={goToSignUp}
        ></MinorSide>
      </div>
    </>
  );
}

export default LoginPage;
