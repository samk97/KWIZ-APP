import StudentQuestionArea from "../components/StudentQuestionArea";
function StudentQuiz() {
  return (
    <>
      <div class="flex w-full min-h-screen bg-blue-300">
        {/* left info area */}
        <div class="flex flex-col items-center w-2/12 bg-deepBlue border-r-2 border-gray-400"></div>
        {/* Quiz area */}
        <div class="w-10/12 bg-gradient-to-r from-indigo-900 via-emerald-500 to-indigo-900">
          <StudentQuestionArea></StudentQuestionArea>
          <div class="flex justify-center items-center my-10 mx-3 h-10">
            <button
              type="submit"
              class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-1/6 px-5 py-2.5 m-3 my-5 text-center"
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
