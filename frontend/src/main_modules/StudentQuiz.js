import StudentQuestionArea from "../components/StudentQuestionArea";
function StudentQuiz() {
  return (
    <>
      <div class="flex w-full h-screen">
        {/* left info area */}
        <div class="md:flex flex-col md:items-center md:w-2/12 md:bg-gray-300 md:border-r-2 md:border-gray-400">
          <div className="hidden md:flex md:w-full md:h-auto md:bg-emerald-700 p-2">
            <p class="w-full">2022ca000</p>
          </div>

          {/* Timer Area */}
          <div className="hidden md:flex md:w-full md:h-auto md:bg-red-200 p-2">
            <p class="w-full">Timer area</p>
          </div>

          <div className="hidden md:flex md:w-full md:h-auto md:bg-blue-200 p-2">
            <p class="w-full">
              Attempted: <sapn>10</sapn>
            </p>
          </div>

          <div className="hidden md:flex md:w-full md:h-auto md:bg-blue-200 p-2">
            <p class="w-full">
              Not Attempted: <span>5</span>
            </p>
          </div>

          <div className="hidden md:flex md:w-full md:h-auto md:bg-blue-200 p-2">
            <p class="w-full">
              Total: <span>15</span>
            </p>
          </div>
        </div>
        {/* Quiz area */}
        <div class="md:w-10/12 bg-gray-200">
          <StudentQuestionArea></StudentQuestionArea>
          <div class="flex justify-center items-center my-10 mx-3 h-10">
            <button
              type="submit"
              class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm min-w-[6rem] max-w-[8rem] w-1/6 px-5 py-2.5 m-3 my-5 text-center"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentQuiz;
