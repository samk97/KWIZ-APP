import Button from "./Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function QuestionForm(props) {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [op_a, setOp_a] = useState("");
  const [op_b, setOp_b] = useState("");
  const [op_c, setOp_c] = useState("");
  const [op_d, setOp_d] = useState("");
  const [ans, setAns] = useState("");
  const [exp, setExp] = useState("");

  const UploadQuestion = async (e) => {
    e.preventDefault();
    let items = { question, op_a, op_b, op_c, op_d, ans, exp };
    console.log(items);

    const res = await fetch("http://localhost:4000/api/upload-question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        question: question,
        op_a: op_a,
        op_b: op_b,
        op_c: op_c,
        op_d: op_d,
        ans: ans,
        exp: exp,
      },
    });
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      alert("Successsfully uploaded !!");
    }
    if (res.status === 403) {
      alert("Question Already Exist");
    }
  };
  return (
    <>
      {/* Questions */}
      <div
        className={`bg-gray-100 w-full h-vh min-h-screen overlflow-y-scroll p-5 ${
          props.open ? "ml-72" : "ml-16"
        } duration-200`}
      >
        <form>
          <div className="border-x-2 border-t-2 border-gray-500 bg-green-200 rounded-tl-xl rounded-tr-xl mt-3 mr-3 ml-3 p-3">
            {/* Question */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="question"
              >
                Question
              </label>

              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full p-3 h-28"
                id="question"
                name="question"
                placeholder="Type your question here"
              ></textarea>
            </div>
          </div>
          {/* Options div */}
          <div className="border-x-2 border-b-2 border-gray-500 bg-lime-100 rounded-bl-xl rounded-br-xl mb-3 mr-3 ml-3 p-3">
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
                  value={op_a}
                  onChange={(e) => setOp_a(e.target.value)}
                  className="w-full p-3"
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
                  value={op_b}
                  onChange={(e) => setOp_b(e.target.value)}
                  className="w-full p-3"
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
                  value={op_c}
                  onChange={(e) => setOp_c(e.target.value)}
                  className="w-full p-3"
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
                  value={op_d}
                  onChange={(e) => setOp_d(e.target.value)}
                  className="w-full p-3"
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
                value={ans}
                onChange={(e) => setAns(e.target.value)}
                className="w-full p-3 h-20"
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
                value={exp}
                onChange={(e) => setExp(e.target.value)}
                className="w-full p-3 h-28"
                id="explaination"
                name="explaination"
                placeholder="Type your explaination here"
              ></textarea>
            </div>

            <div className="mt-3 flex justify-center gap-5 w-full h-10">
              <Button
                onClick={UploadQuestion}
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
