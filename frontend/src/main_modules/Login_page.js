import Major_side from "../components/Major_side";
import Minor_side from "../components/Minor_side";
import Form from "../components/Form";
import InputField from "../components/InputField";
import Link from "../components/Link";
import Button from "../components/Button";

function Login_page() {
  const formLabel = "Log in";
  const buttonLabel = "Sign in";
  return (
    <>
      <div className="flex w-full h-screen">
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

        <Minor_side
          text1="New Here?"
          text2="Sign up and take your quizzes here."
          text3="Choose from a variety of questions or add your own."
          buttonLabel="Sign up"
        ></Minor_side>
      </div>
    </>
  );
}

export default Login_page;
