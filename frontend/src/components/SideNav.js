import { NavLink, Outlet } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { FaListAlt } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

function SideNav(props) {
  return (
    <>
      <nav>
        {/* Sidenav wrapper */}
        <div className="fixed top-0 left-0">
          {/* Sidenav */}
          <div
            className={`relative flex flex-col justify-start bg-skyBlue h-screen ${
              props.open ? "w-72" : "w-16"
            } duration-200`}
          >
            <div className="relative w-full h-[50px] bg-neutralBlue">
              {/* SideNav expansion Arrow */}
              <FiChevronLeft
                className={`bg-green-400 text-extremeBlue rounded-full text-3xl absolute right-2 top-2 cursor-pointer ${
                  !props.open && "rotate-180"
                } duration-500`}
                onClick={props.onOpen}
              ></FiChevronLeft>
            </div>

            {/* SideNav Mid Section */}
            <div className="relative flex flex-col justify-center w-full">
              {/* Sidenav option 1 */}
              <NavLink to="/admin/questions">
                <div className="flex justify-start items-center w-full h-[60px] border-b border-black hover:font-bold">
                  <div className="flex justify-center items-center w-16 h-full">
                    <FaListAlt className="m-[9px] text-[47px] cursor-pointer"></FaListAlt>
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
                <div className="flex justify-start items-center w-full h-[60px] border-b border-black  hover:font-bold">
                  <div className="flex justify-center items-center w-16 h-full">
                    <FaPenSquare className="m-[6px] text-[53px] cursor-pointer"></FaPenSquare>
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
                <div className="flex justify-start items-center w-full h-[60px] border-b border-black  hover:font-bold">
                  <div className="flex justify-center items-center w-16 h-full">
                    <MdQuiz className="m-[5px] rounded-xl text-[60px] cursor-pointer m-2"></MdQuiz>
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
                <div className="flex justify-start items-center w-full h-[60px] border-b border-black  hover:font-bold">
                  <div className="flex justify-center items-center w-16 h-full">
                    <FaHistory className="m-[15px] text-[40px] cursor-pointer m-2"></FaHistory>
                  </div>

                  <span
                    className={`duration-100 ${!props.open && "scale-0 w-0"}`}
                  >
                    History
                  </span>
                </div>
              </NavLink>
            </div>

            <div className="border-t border-black w-full h-[60px] absolute bottom-0 duration-300">
              <div className="w-full h-full relative">
                <NavLink to="/admin/history">
                  <div className="flex justify-start items-center w-full h-[60px]  hover:font-bold">
                    <div className="flex justify-center items-center w-16 h-full">
                      <BiLogOut className="m-[15px] text-[40px] cursor-pointer m-2"></BiLogOut>
                    </div>

                    <span
                      className={`duration-100 ${!props.open && "scale-0 w-0"}`}
                    >
                      Log Out
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
