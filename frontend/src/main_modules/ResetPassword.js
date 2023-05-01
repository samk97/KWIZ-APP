import MajorSide from "../components/MajorSide";
import MinorSide from "../components/MinorSide";
import Form from "../components/Form";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase-auth/firebase";
import { confirmPasswordReset } from "firebase/auth";
import ReactLoading from "react-loading";
function ResetPassword(){

  const navigate = useNavigate();
 
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();
  const url = process.env.REACT_APP_URL;

  const state = useSelector((state) => ({ ...state }));
  console.log(process.env.REACT_APP_URL, "URL");

  const goToSignUp = () => {
    navigate("/signup");
  };

  const Reset = async (e) => {
    e.preventDefault();
    const location=useLocation();
    const queryParams= new URLSearchParams(location.search);
    const oobCode= queryParams.get("oobCode");
    console.log(queryParams);
    console.log("fhth");
    confirmPasswordReset(auth,oobCode,password)
      .then(() => {
        alert("Password reset success!!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };


  
  return (
    <>
      <div className="flex w-full h-screen">
        <MajorSide>
          <Form>
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
            {/* password */}
            {/* <InputField
              labelHtmlFor="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-green"
              labelPlaceHolder="Confirm Password"
              inputType="password"
              inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              inputPlaceholder="•••••••••••••"
            ></InputField> */}

            <Button
              ButtonType="submit"
              onClick={Reset}
              buttonClassName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center min-w-[4rem] max-w-[6rem] w-4/12 m-2"
              buttonLabel="submit"
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

export default ResetPassword;
