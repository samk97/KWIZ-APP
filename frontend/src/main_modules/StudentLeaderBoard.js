function StudentLeaderBoard(props) {
  return (
    <>
      <div className="flex">
        <div
          className={`bg-green-100 w-full h-vh min-h-screen overlflow-y-scroll p-5 ${
            props.open ? "ml-48 sm:ml-72" : "ml-[3.7rem] sm:ml-16"
          } duration-200`}
        >
          {/* Heading */}
          <div className="w-full bg-red-200 p-2">
            <h1 className="text-xl font-bold text-gray-800">Rankings</h1>
          </div>

          <div className="w-full my-3 shadow-slate-800">
            <fieldset className="flex justify-center bg-gradient-to-r from-cyan-400 to-blue-300 border-2 border-gray-700 rounded-2xl shadow-slate-800 shadow-xl p-3">
              <legend className="text-center text-2xl text-purple-950 font-extrabold border-2 bg-yellow-400 border-gray-700 rounded-2xl p-3">
                <h1>LEADERBOARD</h1>
              </legend>
              {/* Ranking part */}
              <div className="w-full sm:w-[70%] flex flex-col">
                {/* Single rank + name tab */}
                <div className="flex items-center bg-gradient-to-r from-green-300 to-emerald-500 shadow-slate-800 shadow-xl border-2 border-gray-700 rounded-3xl p-1 m-2">
                  {/* Ranking position */}
                  <div className="flex justify-center rounded-full items-center bg-blue-700 w-11 min-w-fit h-10 min-h-fit m-2 p-2">
                    <p className="text-white text-xl font-bold">1</p>
                  </div>
                  {/* Name Section */}
                  <div className="flex justify-start items-center w-full m-2">
                    <p className="text-lg">Dummy Name</p>
                  </div>
                </div>

                {/* Single rank + name tab */}
                <div className="flex items-center bg-gradient-to-r from-green-300 to-emerald-500 shadow-slate-800 shadow-xl border-2 border-gray-700 rounded-3xl p-1 m-2">
                  {/* Ranking position */}
                  <div className="flex justify-center rounded-full items-center bg-blue-700 w-11 min-w-fit h-10 min-h-fit m-2 p-2">
                    <p className="text-white text-xl font-bold">2</p>
                  </div>
                  {/* Name Section */}
                  <div className="flex justify-start items-center w-full m-2">
                    <p className="text-lg">Dummy Name 2</p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentLeaderBoard;
