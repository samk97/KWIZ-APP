function Sform(props) {
  const action = props.action;
  const buttonAction = props.buttonAction;
  return (
    <>
      <div className="z-10 flex flex-col w-2/3 bg-white border-2 border-black border-opacity-30 rounded-2xl shadow-2xl shadow-stone-500 p-3">
        <h1 className="text-[40px] font-extrabold text-center">{action}</h1>

        <form>
          {/* ID */}
          <div>
            <label
              for="e-mail"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-green"
            >
              e-mail
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter e-mail"
              required
            />
          </div>

          <div>
            <label
              for="e-mail"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-green"
            >
              Name
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* password */}
          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="•••••••••"
              required
            />

            {/* forgot password */}
            <a href="#" className="text-blue-500 block">
              Forgot password?
            </a>

            {/* submit button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center w-4/12"
              >
                {buttonAction}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Sform;
