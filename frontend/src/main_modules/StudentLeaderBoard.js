import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ReactLoading from "react-loading";

function StudentLeaderBoard(props) {


  const [data,setData] = useState([]);
  const [flag,setFlag] = useState(true);
  const url = process.env.REACT_APP_URL;
  useEffect(() => {
    axios
      .post(url + "/get-leaderboard", {})
      .then(function (res) {
       
        res.data.sort((a,b) => (Number(a.score) < Number(b.score)? 1 : -1));
        console.log(res.data);
        setData(res.data);
        setFlag(false);

        return () => {};
      })
      .catch(function (err) {
        console.log(err);
        setFlag(false);
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
          <div className="w-full bg-red-200 p-2">
            <h1 className="text-xl font-bold text-gray-800">Rankings</h1>
          </div>
          {flag &&  <ReactLoading type="balls" color="#0000FF" 
        height={100} width={50} />}

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
                    <div className="flex justify-start items-center w-full m-2">
                      <p className="text-lg">{"Score : " + e.score}</p>
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

export default StudentLeaderBoard;
