import { NavLink, Outlet } from "react-router-dom";
import { FiChevronLeft, FiEdit2 } from "react-icons/fi";
import { GiRank3 } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function StudentSideNav(props) {
  const email = "abcdef.2021ca001@mnnit.ac.in";
  let navigate = useNavigate();

  let dispatch = useDispatch();

  const state = useSelector((state) => ({ ...state }));
  console.log(state);

  useEffect(() => {
    if (state && state.user) {
      if (state.user.role == "teacher") navigate("/admin");
    } else {
      navigate("/login");
    }
  });

  const handleLogOut = (e) => {
    e.preventDefault();
    console.log("aa");
    localStorage.clear();

    dispatch({
      type: "LOGOUT",
      payload: null,
    });

    navigate("/login");
  };

  const regNo = email.substring(email.indexOf(".") + 1, email.lastIndexOf("@"));
  console.log(`reg : ${regNo}`);

  return (
    <>
      <nav>
        {/* Top Nav for mobile devices */}
        <div className="sm:hidden flex fixed top-0 bg-green-300 w-full h-10">
          <div className="h-full w-1/6"></div>
          <div className="flex justify-center h-full w-4/6">
            <NavLink to="/dashboard/attempt_quiz">
              <div className="flex justify-center items-center h-full w-10">
                <FiEdit2 className="text-[1.3rem]" />
              </div>
            </NavLink>

            <NavLink to="/dashboard/leaderboard">
              <div className="flex justify-center items-center h-full w-10">
                <GiRank3 className="text-[1.3rem]" />
              </div>
            </NavLink>
          </div>
          <div
            onClick={handleLogOut}
            className="flex justify-center items-center h-full w-1/6"
          >
            <div className="border-l border-black pl-1">
              <p className="text-sm font-bold text-blue-700">Log Out</p>
            </div>
          </div>
        </div>

        {/* Student Reg no */}
        <div className="sm:hidden flex justify-center items-center fixed top-0 h-10 text-gray-800 p-1">
          {regNo}
        </div>

        {/* StudentSideNav wrapper */}
        <div className="fixed top-0 left-0 h-screen">
          {/* StudentSideNav */}
          <div
            className={`hidden sm:flex  flex-col justify-start relative border-r border-gray-700 bg-gray-200 h-screen ${
              props.open ? "w-48 sm:w-72" : "w-[3.7rem] sm:w-16"
            } duration-200`}
          >
            <div
              className={`relative w-full p-2 ${
                props.open ? "h-32" : "h-12"
              } bg-emerald-800 duration-200`}
            >
              <div
                className={`absolute left-3 top-5 w-[90%] ${
                  props.open ? "" : "scale-0"
                } duration-100`}
              >
                <BsPersonCircle className="rounded-full text-6xl text-blue-300" />
                <div className="w-full">
                  <p className="text-sm text-gray-200 break-words">{email}</p>
                </div>
              </div>
              {/* StudentSideNav expansion Arrow */}
              <FiChevronLeft
                className={`bg-white border-2 border-blue-400 text-black rounded-full text-3xl absolute right-2 top-2 cursor-pointer ${
                  !props.open && "rotate-180"
                } duration-500`}
                onClick={props.onOpen}
              />
            </div>
            {/* StudentSideNav Mid Section */}
            <div className="relative flex flex-col justify-center w-full">
              {/* StudentSideNav option 1 */}
              <NavLink to="/dashboard/attempt_quiz">
                <div className="flex justify-start items-center w-full hover:font-bold group">
                  <div className="flex justify-center items-center group-hover:scale-[1.1] duration-200 w-16">
                    <FiEdit2 className="text-[2.5rem] cursor-pointer" />
                  </div>

                  <span
                    className={`duration-100 ${!props.open && "scale-0 w-0"}`}
                  >
                    Attempt Quiz
                  </span>
                </div>
              </NavLink>

              {/* StudentSideNav option 2 */}
              <NavLink to="/dashboard/leaderboard">
                <div className="flex justify-start items-center w-full hover:font-bold group">
                  <div className="flex justify-center items-center group-hover:scale-[1.1] duration-200 w-16">
                    <GiRank3 className="text-[3rem]  cursor-pointer" />
                  </div>

                  <span
                    className={`duration-100 ${!props.open && "scale-0 w-0"}`}
                  >
                    LeaderBoard
                  </span>
                </div>
              </NavLink>
            </div>
            <div className=" w-full h-[60px] absolute bottom-0 duration-300">
              <div className="w-full h-full relative">
                <NavLink to="/login">
                  <div className="flex justify-start items-center w-full h-[60px]  hover:font-bold group">
                    <div className="flex justify-center items-center group-hover:scale-[1.1] duration-200 w-16 h-full">
                      <BiLogOut className=" text-[40px] cursor-pointer m-2" />
                    </div>

                    <span
                      className={`duration-100 ${!props.open && "scale-0 w-0"}`}
                    >
                      <button onClick={handleLogOut}> Log Out</button>
                    </span>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default StudentSideNav;
