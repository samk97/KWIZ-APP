function StudentQuestionArea() {
  const QuestionDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fuga ratione incidunt dolorem fugiat numquam alias obcaecati illum blanditiis quam ducimus odio, temporibus nihil, nobis eaque ipsam provident. Placeat, esse laborum repellat quas aliquam in at tempora beatae rem? Vel aperiam odit sapiente et facere unde molestias nemo id praesentium!";

  const op_1 =
    "Option 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur, qui perspiciatis deleniti ducimus inventore amet velit fugit possimus at quae nostrum reprehenderit iste adipisci cumque cupiditate recusandae fugiat beatae natus nam consequuntur earum quaerat molestiae? Dolores, enim cupiditate fugit pariatur quo maiores, recusandae ullam eligendi fugiat corrupti quasi soluta.";
  const op_2 = "Option 2";
  const op_3 = "Option 3";
  const op_4 = "Option 4";
  const qNo = "1";
  return (
    <>
      <div>
        <div class="flex flex-col">
          <div class="flex flex-col justify-center items-center border-x-2 border-t-2 border-gray-500 bg-green-200 rounded-tl-xl rounded-tr-xl mt-3 mr-3 ml-3 p-3">
            <div class="flex justify-center text-lg font-bold leading-loose  bg-gradient-to-r from-green-200 via-indigo-500 to-green-200 min-w-[8rem] max-w-[20rem] w-[60%] px-4">
              <p>Question</p>
              <span>{qNo}</span>
            </div>

            <p>{QuestionDescription}</p>
          </div>

          {/* options div */}
          <div class="bg-lime-100 border-x-2 border-b-2 border-gray-500 rounded-bl-xl rounded-br-xl mb-3 mr-3 ml-3 p-3">
            {/* radio button */}
            <div class="flex items-center pl-4 border-2 border-gray-700 rounded-lg hover:border-green-700 hover:bg-green-100 mb-3">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-7 h-7 text-red-600 bg-gray-100 border-gray-300 accent-red-500"
              />
              <label
                for="bordered-radio-1"
                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 p-2"
              >
                {op_1}
              </label>
            </div>

            <div class="flex items-center pl-4 border-2 border-gray-700 rounded-lg hover:border-green-700 hover:bg-green-100 mb-3">
              <input
                id="bordered-radio-2"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-7 h-7 text-red-600 bg-gray-100 border-gray-300 accent-red-500"
              />
              <label
                for="bordered-radio-2"
                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 p-2"
              >
                {op_2}
              </label>
            </div>

            <div class="flex items-center pl-4 border-2 border-gray-700 rounded-lg hover:border-green-700 hover:bg-green-100 mb-3">
              <input
                id="bordered-radio-3"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-7 h-7 text-red-600 bg-gray-100 border-gray-300 accent-red-500"
              />
              <label
                for="bordered-radio-3"
                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 p-2"
              >
                {op_3}
              </label>
            </div>

            <div class="flex items-center pl-4 border-2 border-gray-700 rounded-lg hover:border-green-700 hover:bg-green-100 mb-3">
              <input
                id="bordered-radio-4"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-7 h-7 text-red-600 bg-gray-100 border-gray-300 accent-red-500"
              />
              <label
                for="bordered-radio-4"
                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 p-2"
              >
                {op_4}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentQuestionArea;
