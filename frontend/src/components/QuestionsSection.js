import QuestionArea from "./QuestionArea";
import { useEffect, useState } from 'react';
import axios from "axios";
function QuestionsSection(props) {

  const [myData,setMyData] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:4000/api/get-questions', {}).then((res) =>
      setMyData(res.data));
  }, [])
  return (
    <>

            

       {/* Questions */}
          <div
          className={`bg-gray-100 w-full h-vh min-h-screen overlflow-y-scroll p-5 ${props.open ? "ml-72" : "ml-16"
            } duration-200`}
        >
          {/* Question box */}

          {myData.map((post,index)=>{
          const {question,op_a,op_b,op_c,op_d,ans,exp}=post;
          return <QuestionArea key={index}
                    index={index+1}
                    question={question}
                    op_a={op_a}
                    op_b={op_b}
                    op_c={op_c}
                    op_d={op_d}
                    ans={ans}
                    exp={exp}
                    ></QuestionArea>
        })}

          
        </div>

      
      
    </>
  );
}

export default QuestionsSection;
