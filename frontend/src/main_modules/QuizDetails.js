import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function QuizDetails(props) {
  const title = "Data Structure Quiz 1";
  const createdAt = "00/00/0000";
  const noOfQeustions = "123";
  const runTime = "10";
  const startTime = "00:00";
  const updatedAt = "00/00/0000";

  const [data,setData] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:4000/api/get-leaderboard", {})
      .then(function (res) {
       
        res.data.sort((a,b) => (Number(a.score) < Number(b.score)? 1 : -1));
        console.log(res.data);
        setData(res.data);

        return () => {};
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);


  return (
    <>
      <div className="flex">
        <div
          className={`bg-gray-100 w-full h-vh min-h-screen overlflow-y-scroll p-5 ${
            props.open ? "ml-72" : "ml-16"
          } duration-200`}
        >
          {/* Heading */}
          <div className="w-full bg-red-200 p-2 mb-3">
            <h1 className="text-xl font-bold text-gray-800">Quiz Details</h1>
          </div>

          <div className="w-full rounded-xl border-2 border-gray-500 p-4">
            <div className="flex justify-center">
              <p className="text-lg font-bold">
                Quiz Title: <span>{title}</span>
              </p>
            </div>
            <div className="bg-green-700 w-full h-[0.2rem] m-2"></div>
            {/* Details div */}
            <div className="flex justify-center">
              <table className="table-fixed">
                <tr>
                  <td className="text-right p-2">Quiz ID:</td>
                  <td className="text-left p-2">jsdasashhschs121213</td>
                </tr>

                <tr>
                  <td className="text-right p-2">Created At:</td>
                  <td className="text-left p-2">{createdAt}</td>
                </tr>

                <tr>
                  <td className="text-right p-2">Total questions:</td>
                  <td className="text-left p-2">{noOfQeustions}</td>
                </tr>

                <tr>
                  <td className="text-right p-2">Runtime:</td>
                  <td className="text-left p-2">{runTime}</td>
                </tr>

                <tr>
                  <td className="text-right p-2">Start Time:</td>
                  <td className="text-left p-2">{startTime}</td>
                </tr>

                <tr>
                  <td className="text-right p-2">Updated At:</td>
                  <td className="text-left p-2">{updatedAt}</td>
                </tr>
              </table>
            </div>
          </div>

          {/* Heading */}
          <div className="w-full bg-red-200 p-2 mb-3 mt-3">
            <h1 className="text-xl font-bold text-gray-800">Ranking</h1>
          </div>

          <div className="w-full my-3 shadow-slate-800">
            <fieldset className="flex justify-center bg-gradient-to-r from-cyan-400 to-blue-300 border-2 border-gray-700 rounded-2xl shadow-slate-800 shadow-xl p-3">
              <legend className="text-center text-2xl text-purple-950 font-extrabold border-2 bg-yellow-400 border-gray-700 rounded-2xl p-3">
                <h1>LEADERBOARD</h1>
              </legend>
              {/* Ranking part */}
             
              <div className="w-[90%] sm:w-[70%] flex flex-col">
                {/* Single rank + name tab */}
                {data && data.map((e,id)=>{
                  return (
                    <div className="flex items-center bg-gradient-to-r from-green-300 to-emerald-500 shadow-slate-800 shadow-xl border-2 border-gray-700 rounded-3xl p-1 m-2">
                    {/* Ranking position */}
                    <div className="flex justify-center rounded-full items-center bg-blue-700 w-11 min-w-fit h-10 min-h-fit m-2 p-2">
                      <p className="text-white text-xl font-bold">{id + 1}</p>
                    </div>
                    {/* Name Section */}
                    <div className="flex justify-start items-center w-full m-2">
                      <p className="text-lg">{e.email}</p>
                    </div>
                  </div>
                  )
                })}
               

               
              </div>
            </fieldset>
          </div>

        </div>
      </div>
    </>
  );
}

export default QuizDetails;
