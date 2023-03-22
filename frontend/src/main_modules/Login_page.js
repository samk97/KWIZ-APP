import Major_side from "../components/Major_side";
import Minor_side from "../components/Minor_side";

function Login_page() {
  return (
    <>
      <div className="flex w-full h-screen">
        <Major_side action="Log in" buttonAction="Sign in"></Major_side>
        <Minor_side
          text1="New Here?"
          text2="Sign up and take your quizzes here."
          text3="Choose from a variety of questions or add your own."
          buttonAction="Sign up"
        ></Minor_side>
      </div>
    </>
  );
}

export default Login_page;
