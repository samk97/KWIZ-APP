function StudentLeaderBoard(props) {
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
            <h1 className="text-xl font-bold text-gray-800">LeaderBoard</h1>
          </div>

          <div className="bg-blue-300 w-full my-3">
            <fieldset className="flex justify-center border-2 border-gray-700 rounded-2xl p-3">
              <legend className="text-center border-2 border-gray-700 rounded-2xl p-3">
                LEADERBOARD
              </legend>

              {/* Ranking part */}
              <div className=" w-[70%] flex flex-col">
                {/* Single name tab */}
                <div className="bg-green-300 border-2 border-gray-700 rounded-3xl p-3 m-2">
                  {/* Ranking number */}
                  <div className="flex justify-center items-center bg-red-200 w-10 h-10">
                    <p className="">1</p>
                  </div>
                </div>

                <div className="bg-green-300 border-2 border-gray-700 rounded-3xl p-3 m-2">
                  <p>Name Here</p>
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
