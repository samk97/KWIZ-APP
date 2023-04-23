<<<<<<< HEAD
import {useEffect} from 'react'
import axios  from 'axios';
const AdminHistory = (props) =>{ 

  
  useEffect(()=>{
     axios.post('http://localhost:4000/api/get-all-quiz',{ }).then(function(res){
     console.log(res);
     return ()=>{}
  }).catch(function(err){
    console.log(err);
  })
  },[])


=======
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const AdminHistory = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:4000/api/get-all-quiz", {})
      .then(function (res) {
        setData(res.data);
        return () => {};
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
>>>>>>> fcda820b1cc373b448d84a1f41768b83b4b26999

  console.log(data);
  return (
    <>
      <div className="flex">
        <div
          className={`bg-gray-100 w-full h-vh min-h-screen overlflow-y-scroll p-5 ${
            props.open ? "ml-72" : "ml-16"
          } duration-200`}
        >
          {/* Heading */}
          <div className="w-full bg-red-200 p-2">
            <h1 className="text-xl font-bold text-gray-800">Past Quizzes</h1>
          </div>
          {/* Tiles Container */}
          <div className="flex flex-wrap justify-start my-4 gap-5">
            {/* tile */}

            {data.map((details) => {
              const { createdAt, questions, runTime, startTime, title, id } =
                details;
              return (
                <div key={id}>
                  <Link to="/admin/quiz_details">
                    <div className="bg-blue-200 w-60 h-60 p-4 drop-shadow-xl rounded-md hover:cursor-pointer hover:ring ring-offset-2 ring-red-400">
                      <div className="mb-2">
                        <p className="text-xl italic">{title}</p>
                      </div>
                      <div className="text-sm">
                        <p>
                          Created : <span>{createdAt.substring(0, 10)}</span>{" "}
                          <span className="italic">
                            ({createdAt.substring(11, 19)})
                          </span>
                        </p>
                        <p>
                          Total Questions: <span>{questions.length}</span>
                        </p>
                        <p>
                          Time Alloted: <span>{runTime} min</span>
                        </p>

                        <p>
                          Start Time: <span>{startTime.substring(0, 10)} </span>{" "}
                          <span className="italic">
                            ({startTime.substring(11, 19)}){" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHistory;
