import Major_side from "../components/Major_side";
import Minor_side from "../components/Minor_side";
import Form from "../components/Form";
import InputField from "../components/InputField";
import Link from "../components/Link";
import Button from "../components/Button";

function Signup_page() {
  const formLabel = "Sign up";
  const buttonLabel = "Sign up";

  return (
    <>
      <div className="flex w-full h-screen">
        <Minor_side
          text1="Already Registered?"
          text2="Start taking your quizzes now."
          text3="Just select your questions with a click."
          buttonLabel="Sign in"
        ></Minor_side>

        <Major_side>
          <Form formLabel={formLabel}>
            {/* ID */}
            <InputField
              labelHtmlFor="email"
              labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-green"
              labelPlaceHolder="e-mail"
              inputType="text"
              inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              inputPlaceholder="Enter e-mail"
            ></InputField>

            {/* Name */}
            <InputField
              labelHtmlFor="name"
              labelClassName="block mb-2 text-sm font-medium text-gray-900 dark:text-green"
              labelPlaceHolder="Name"
              inputType="text"
              inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              inputPlaceholder="Enter your name"
            ></InputField>

            {/* password */}
            <InputField
              labelHtmlFor="password"
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
              ButtonType="submit"
              buttonClassName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center w-4/12"
              buttonLabel={buttonLabel}
            ></Button>
          </Form>
        </Major_side>
      </div>
    </>
  );
}

export default Signup_page;
