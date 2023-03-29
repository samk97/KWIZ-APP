import { useState } from "react";
function Question_area(props) {
  const [open, setOpen] = useState(true);

  const question = props.question;
  const op_a = props.op_a;
  const op_b = props.op_b;
  const op_c = props.op_c;
  const op_d = props.op_d;
  const ans = props.ans;
  return (
    <>
      <div
        class={`bg-red-300 w-full h-vh overlflow-y-scroll p-5 ${
          open ? "ml-72" : "ml-16"
        } duration-200`}
      >
        <h2 class="text-center">Questions Section</h2>
        <div class="flex flex-col justify-center items-center bg-green-100 rounded-tl-xl rounded-tr-xl mt-3 mr-3 ml-3 p-3">
          <div class="text-lg font-bold leading-loose bg-gradient-to- from-indigo-500 rounded-md px-4">
            <p>Question</p>
          </div>

          <p>{question}</p>
        </div>
        {/* options div */}
        <div class="bg-green-300 rounded-bl-xl rounded-br-xl mb-3 mr-3 ml-3 p-3">
          {/* Option A */}
          <div class="flex items-center pl-4 border-2 border-gray-700 rounded-lg mb-3">
            <div class="flex">
              <div class="flex justify-center items-center border-r-2 border-gray-700 w-[40px] p-3">
                <span class="font-bold">A</span>
              </div>
              <div class="m-3 w-full">{op_a}</div>
            </div>
          </div>

          {/* Option B */}
          <div class="flex items-center pl-4 border-2 border-gray-700 rounded-lg mb-3">
            <div class="flex">
              <div class="flex justify-center items-center border-r-2 border-gray-700 w-[40px] p-3">
                <span class="font-bold">B</span>
              </div>
              <div class="m-3 w-full">{op_b}</div>
            </div>
          </div>

          {/* Option C */}
          <div class="flex items-center pl-4 border-2 border-gray-700 rounded-lg mb-3">
            <div class="flex">
              <div class="flex justify-center items-center border-r-2 border-gray-700 w-[40px] p-3">
                <span class="font-bold">C</span>
              </div>
              <div class="m-3 w-full">{op_c}</div>
            </div>
          </div>

          {/* Option D */}
          <div class="flex items-center pl-4 border-2 border-gray-700 rounded-lg mb-3">
            <div class="flex">
              <div class="flex justify-center items-center border-r-2 border-gray-700 w-[40px] p-3">
                <span class="font-bold">D</span>
              </div>
              <div class="m-3 w-full">{op_d}</div>
            </div>
          </div>

          {/* Correct Ans */}
          <div class="flex justify-center w-full h-16">
            <div class="bg-blue-700 text-white flex items-center pl-4 border-2 border-gray-700 rounded-lg w-2/6 h-16">
              <div class="flex justify-end  w-3/6 pr-3 font-bold">
                <span>Correct Ans :</span>
              </div>
              <div class="flex justify-start w-3/6 pl-1 font-bold">
                <span class="pl-2">{ans}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question_area;
