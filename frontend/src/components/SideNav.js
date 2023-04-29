import { NavLink, Outlet } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { FaListAlt } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function SideNav(props) {
  
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const state = useSelector((state) => ({ ...state }));
  console.log(state);
  var userName = "";
  if(state &&  state.user )
  userName = state.user.email;

  useEffect(() => {
    if (state && state.user) {
      if (state.user.role === "student") navigate("/dashboard");
    } else {
      navigate("/login");
    }
  });

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });

    navigate("/login");
  };

  return (
    <>
      <nav>
        {/* Sidenav wrapper */}
        <div className="fixed top-0 left-0">
          {/* Sidenav */}
          <div
            className={`border-r border-gray-700 relative flex flex-col justify-start bg-gray-200 h-screen ${
              props.open ? "w-64  sm:w-72" : "w-10 sm:w-16"
            } duration-200`}
          >
            <div
              className={`relative w-full ${
                props.open ? "h-32" : "h-12"
              } bg-emerald-800 duration-200`}
            >
              <div
                className={`absolute left-3 top-5 ${
                  props.open ? "" : "scale-0"
                } duration-100`}
              >
                <BsPersonCircle className="rounded-full text-6xl text-blue-300"></BsPersonCircle>
                <div>
                  <span className="text-sm text-gray-200">{userName}</span>
                </div>
              </div>

              {/* SideNav expansion Arrow */}
              <FiChevronLeft
                className={`bg-white border-2 border-blue-400 text-black rounded-full text-3xl absolute right-2 top-2 cursor-pointer ${
                  !props.open && "rotate-180"
                } duration-500`}
                onClick={props.onOpen}
              ></FiChevronLeft>
            </div>

            {/* SideNav Mid Section */}
            <div className="relative flex flex-col justify-center w-full">
              {/* Sidenav option 1 */}
              <NavLink to="/admin/questions">
                <div className="flex justify-start items-center w-full hover:font-bold">
                  <div className="flex justify-center items-center w-16">
                    <FaListAlt className="text-[46px] cursor-pointer"></FaListAlt>
                  </div>

                  <span
                    className={`duration-100 ${!props.open && "scale-0 w-0"}`}
                  >
                    Questions
                  </span>
                </div>
              </NavLink>

              {/* Sidenav Option 2 */}
              <NavLink to="/admin/create_questions">
                <div className="flex justify-start items-center w-full hover:font-bold">
                  <div className="flex justify-center items-center w-16 h-full">
                    <FaPenSquare className="text-[50px] cursor-pointer"></FaPenSquare>
                  </div>

                  <span
                    className={`duration-100 ${!props.open && "scale-0 w-0"}`}
                  >
                    Create Questions
                  </span>
                </div>
              </NavLink>

              {/* Sidenav Option 3 */}
              <NavLink to="/admin/create_quiz">
                <div className="flex justify-start items-center w-full hover:font-bold">
                  <div className="flex justify-center items-center w-16 h-full">
                    <MdQuiz className="rounded-xl text-[50px] cursor-pointer"></MdQuiz>
                  </div>

                  <span
                    className={`duration-100 ${!props.open && "scale-0 w-0"}`}
                  >
                    Create Quiz
                  </span>
                </div>
              </NavLink>

              {/* Sidenav Option 4 */}
              <NavLink to="/admin/history">
                <div className="flex justify-start items-center w-full hover:font-bold">
                  <div className="flex justify-center items-center w-16 h-full">
                    <FaHistory className=" text-[40px] cursor-pointer m-2"></FaHistory>
                  </div>

                  <span
                    className={`duration-100 ${!props.open && "scale-0 w-0"}`}
                  >
                    History
                  </span>
                </div>
              </NavLink>
            </div>

            <div className=" w-full h-[60px] absolute bottom-0 duration-300"   onClick={handleLogOut}>
              <div className="w-full h-full relative">
                <NavLink to="/login">
                  <div className="flex justify-start items-center w-full h-[60px]  hover:font-bold">
                    <div className="flex justify-center items-center w-16 h-full">
                      <BiLogOut className=" text-[40px] cursor-pointer m-2"></BiLogOut>
                    </div>

                    <span
                      className={`duration-100 ${!props.open && "scale-0 w-0"}`}
                    
                    >
                      <button> Log Out</button>
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

export default SideNav;
