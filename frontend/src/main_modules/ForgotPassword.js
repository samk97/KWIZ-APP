import Button from "../components/Button";
function ForgotPassword() {
  return (
    <>
      {/* Wrapper div */}
      <div className="h-screen flex justify-center items-center">
        {/* Outer box */}
        <div className="border-2 border-gray-700 rounded md:w-[80%] lg:w-[50%]">
          {/* Upper Box */}
          <div className="border border-gray-700 rounded m-2 p-2">
            {/* Verify Here */}
            <div className="bg-red-200 flex justify-center items-center text-2xl font-bold text-gray-800">
              <p>Verify Here</p>
            </div>

            <div className="">
              {/*Email Input Field + Button */}
              <div className="py-1 px-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 dark:text-green"
                >
                  e-mail
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-[70%] p-2.5"
                  placeholder="Type registered e-mail"
                  name="email"
                  required
                />

                {/* Send button */}
                <button
                  type="submit"
                  className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center w-24 p-3 m-3"
                >
                  Send OTP
                </button>
              </div>

              {/*OTP Input Field + Button */}
              <div className="py-1 px-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 dark:text-green"
                >
                  OTP
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-[70%] p-2.5"
                  placeholder="Enter OTP"
                  name="email"
                  required
                />

                {/* Verify button */}
                <button
                  type="submit"
                  className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center w-24 p-3 m-3"
                >
                  Verify
                </button>
              </div>
            </div>
          </div>

          {/* Below box */}
          <form>
            <div className="border border-gray-700 rounded m-2 p-2">
              {/* Set New Password */}
              <div className="bg-red-200 flex justify-center items-center text-2xl font-bold text-gray-800">
                <p>Set New Password</p>
              </div>
              {/* New Password */}
              <div className="py-1 px-3">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-green"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-full p-2.5"
                  placeholder="Type new password here"
                  name="email"
                  required
                />
              </div>

              {/* Retype New Password */}
              <div className="py-1 px-3">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-green"
                >
                  Retype New Password
                </label>
                <input
                  type="password"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-full p-2.5"
                  placeholder="Retype new password here"
                  name="email"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center w-24 p-3 m-3"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
