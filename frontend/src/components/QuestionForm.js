import Button from "./Button";
function QuestionForm(props) {
  return (
    <>
      {/* Questions */}
      <div
        className={`bg-extremeBlue w-full h-vh min-h-screen overlflow-y-scroll p-5 ${
          props.open ? "ml-72" : "ml-16"
        } duration-200`}
      >
        <form>
          <div className="border-x-2 border-t-2 border-gray-500 bg-darkBlue rounded-tl-xl rounded-tr-xl mt-3 mr-3 ml-3 p-3">
            {/* Question */}
            <div>
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                for="question"
              >
                Question
              </label>

              <textarea
                className="w-full p-3 h-28 bg-black text-white"
                id="question"
                name="question"
                placeholder="Type your question here"
              ></textarea>
            </div>
          </div>
          {/* Options div */}
          <div className="border-x-2 border-b-2 border-gray-500 bg-softBlue rounded-bl-xl rounded-br-xl mb-3 mr-3 ml-3 p-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="question"
            >
              Options
            </label>

            {/* Option A */}
            <div className="flex border-2 border-gray-700 rounded-lg mb-3 min-h-[20px]">
              {/* option label */}
              <div className="flex justify-center items-center w-[5%] border-r-2 border-gray-700">
                A
              </div>
              {/* Option text */}
              <div className="flex w-[95%]">
                <textarea
                  className="w-full p-3 bg-black text-white"
                  id="question"
                  name="question"
                  placeholder="Type option A here"
                ></textarea>
              </div>
            </div>

            {/* Option B */}
            <div className="flex border-2 border-gray-700 rounded-lg mb-3 min-h-[20px]">
              {/* option label */}
              <div className="flex justify-center items-center w-[5%] border-r-2 border-gray-700">
                B
              </div>
              {/* Option text */}
              <div className="flex w-[95%]">
                <textarea
                  className="w-full p-3 bg-black text-white"
                  id="question"
                  name="question"
                  placeholder="Type option B here"
                ></textarea>
              </div>
            </div>

            {/* Option C */}
            <div className="flex border-2 border-gray-700 rounded-lg mb-3 min-h-[20px]">
              {/* option label */}
              <div className="flex justify-center items-center w-[5%] border-r-2 border-gray-700">
                C
              </div>
              {/* Option text */}
              <div className="flex w-[95%]">
                <textarea
                  className="w-full p-3 bg-black text-white"
                  id="question"
                  name="question"
                  placeholder="Type option C here"
                ></textarea>
              </div>
            </div>

            {/* Option D */}
            <div className="flex border-2 border-gray-700 rounded-lg mb-3 min-h-[20px]">
              {/* option label */}
              <div className="flex justify-center items-center w-[5%] border-r-2 border-gray-700">
                D
              </div>
              {/* Option text */}
              <div className="flex w-[95%]">
                <textarea
                  className="w-full p-3 bg-black text-white"
                  id="question"
                  name="question"
                  placeholder="Type option D here"
                ></textarea>
              </div>
            </div>

            {/* Correct Option */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="question"
              >
                Correct Option
              </label>

              <textarea
                className="w-full p-3 h-20 bg-black text-white"
                id="explaination"
                name="explaination"
                placeholder="Type label of correct option here"
              ></textarea>
            </div>

            {/* Explaination */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="question"
              >
                Explaination
              </label>

              <textarea
                className="w-full p-3 h-28 bg-black text-white"
                id="explaination"
                name="explaination"
                placeholder="Type your explaination here"
              ></textarea>
            </div>

            <div className="mt-3 flex justify-center gap-5 w-full h-10">
              <Button
                buttonType="submit"
                buttonClassName="min-w-[100px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center"
                buttonLabel="Save"
              ></Button>

              <Button
                buttonType="reset"
                buttonClassName="min-w-[100px] text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm py-2.5 text-center"
                buttonLabel="Reset"
              ></Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default QuestionForm;
