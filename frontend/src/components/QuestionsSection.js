import QuestionArea from "./QuestionArea";
import { useEffect, useState } from "react";
import axios from "axios";
function QuestionsSection() {
  const [myData, setMyData] = useState([]);
  const url = process.env.REACT_APP_URL;

  useEffect(() => {
    axios
      .post(url + "/get-questions", {})
      .then((res) => setMyData(res.data));
  }, []);
  return (
    <>
      {/* Question box */}
      {myData.map((post, index) => {
        const { question, op_a, op_b, op_c, op_d, ans, exp } = post;
        return (
          <QuestionArea
            key={index}
            index={index + 1}
            question={question}
            op_a={op_a}
            op_b={op_b}
            op_c={op_c}
            op_d={op_d}
            ans={ans}
            exp={exp}
          ></QuestionArea>
        );
      })}
    </>
  );
}

export default QuestionsSection;
