import MajorSide from "../components/MajorSide";
import MinorSide from "../components/MinorSide";
import Form from "../components/Form";
import InputField from "../components/InputField";
import Link from "../components/Link";
import Button from "../components/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SignupPage = () => {
  const formLabel = "Sign up";
  const buttonLabel = "Sign up";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  const state = useSelector((state) => ({ ...state }));
  console.log(state);

  useEffect(()=>{
    if(state && state.user){
      if(state.user.role == "student")
      navigate("/dashboard");
      else
      navigate("/admin");
    }
  })

  const goToLogin = () => {
    navigate("/login");
  };

  const SignUp = async (e) => {
    e.preventDefault();
    let items = { email, name, password };
    console.log(items);

    const res = await fetch("http://localhost:4000/api/signup", {
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
      console.log(data);
      navigate("/login");
    }
    if (res.status === 403) {
      alert("already exist please login !!");
      navigate("/login");
    }
  };
  return (
    <>
      <div className="flex w-full h-screen">
        <MinorSide
          text1="Already Registered?"
          text2="Start taking your quizzes now."
          text3="Just select your questions with a click."
          buttonLabel="Sign in"
          onClick={goToLogin}
        ></MinorSide>

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

            {/* Name */}
            <InputField
              labelHtmlFor="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-green"
              labelPlaceHolder="Name"
              inputType="text"
              inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              inputPlaceholder="Enter your name"
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

            {/* forgot password */}
            <Link linkLabel="Forgot Password?"></Link>

            {/* submit button */}
            <Button
              onClick={SignUp}
              ButtonType="submit"
              buttonClassName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center w-4/12"
              buttonLabel={buttonLabel}
            ></Button>
          </Form>
        </MajorSide>
      </div>
    </>
  );
};

export default SignupPage;
