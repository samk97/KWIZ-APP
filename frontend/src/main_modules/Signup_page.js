import Major_side from "../components/Major_side";
import Minor_side from "../components/Minor_side";
import Sform from "../components/Sform";

function Signup_page() {
  const action = "Sign up";
  const buttonAction = "Sign up";
  return (
    <>
      <div className="flex w-full h-screen">
        <Minor_side
          text1="Already Registered?"
          text2="Start taking your quizzes now."
          text3="Just select your questions with a click."
          buttonAction="Sign in"
        ></Minor_side>
        <Major_side>
          <Sform action={action} buttonAction={buttonAction}></Sform>
        </Major_side>
      </div>
    </>
  );
}

export default Signup_page;
