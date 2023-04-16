import Button from "../components/Button";

function AdminCreateQuiz(props) {
  return (
    <>
      <div className="flex">
        <div
          className={`bg-extremeBlue w-full h-vh min-h-screen overlflow-y-scroll p-5 ${
            props.open ? "ml-72" : "ml-16"
          } duration-200`}
        >
          {/* Select area */}
          <div class="flex gap-5">
            {/* Select Questions */}
            <div class="w-6/12">
              <label
                for="questions"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Questions
              </label>
              <select
                id="questions"
                class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Select one</option>
                <option value="">5</option>
                <option value="">10</option>
                <option value="">15</option>
                <option value="">25</option>
                <option value="">30</option>
                <option value="">35</option>
                <option value="">40</option>
                <option value="">45</option>
                <option value="">50</option>
              </select>
            </div>

            {/* Time */}
            <div class="w-6/12">
              <label
                for="time"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Time
              </label>
              <select
                id="time"
                class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Unlimited</option>
                <option value="">5 min</option>
                <option value="">10 min</option>
                <option value="">15 min</option>
                <option value="">25 min</option>
                <option value="">30 min</option>
                <option value="">35 min</option>
                <option value="">40 min</option>
                <option value="">45 min</option>
                <option value="">50 min</option>
                <option value="">55 min</option>
                <option value="">60 min</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <div class="flex justify-start">
            <Button
              buttonType="submit"
              buttonLabel="Create Quiz"
              buttonClassName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center p-5 my-3"
              onClick
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCreateQuiz;
