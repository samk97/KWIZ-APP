import { NavLink } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { FaListAlt } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

function SideNav(props) {
  return (
    <nav>
      {/* Sidenav wrapper */}
      <div class="fixed top-0 left-0">
        {/* Sidenav */}
        <div
          class={`relative flex flex-col justify-start bg-blue-300 h-screen ${
            props.open ? "w-72" : "w-16"
          } duration-200`}
        >
          <div class="relative w-full h-[50px] bg-black">
            {/* SideNav expansion Arrow */}
            <FiChevronLeft
              class={`bg-white rounded-full text-3xl absolute right-2 top-2 cursor-pointer ${
                !props.open && "rotate-180"
              } duration-500`}
              onClick={props.onOpen}
            ></FiChevronLeft>
          </div>

          {/* SideNav Mid Section */}
          <div class="relative flex flex-col justify-center w-full">
            {/* Sidenav option 1 */}
            <NavLink to="/admin/questions">
              <div class="flex justify-start items-center w-full h-[60px] bg-green-300 hover:font-bold">
                <div class="flex justify-center items-center w-16 h-full">
                  <FaListAlt class="m-[9px] text-blue-800 text-[47px] cursor-pointer"></FaListAlt>
                </div>

                <span class={`duration-100 ${!props.open && "scale-0 w-0"}`}>
                  Questions
                </span>
              </div>
            </NavLink>

            {/* Sidenav Option 2 */}
            <NavLink to="/admin/create_questions">
              <div class="flex justify-start items-center w-full h-[60px] bg-green-300 hover:font-bold">
                <div class="flex justify-center items-center w-16 h-full">
                  <FaPenSquare class="m-[6px] text-blue-800 text-[53px] cursor-pointer"></FaPenSquare>
                </div>

                <span class={`duration-100 ${!props.open && "scale-0 w-0"}`}>
                  Create Questions
                </span>
              </div>
            </NavLink>

            {/* Sidenav Option 3 */}
            <NavLink to="/admin/create_quiz">
              <div class="flex justify-start items-center w-full h-[60px] bg-green-300 hover:font-bold">
                <div class="flex justify-center items-center w-16 h-full">
                  <MdQuiz class="m-[5px] text-blue-800 rounded-xl text-[60px] cursor-pointer m-2"></MdQuiz>
                </div>

                <span class={`duration-100 ${!props.open && "scale-0 w-0"}`}>
                  Create Quiz
                </span>
              </div>
            </NavLink>

            {/* Sidenav Option 4 */}
            <NavLink to="/admin/history">
              <div class="flex justify-start items-center w-full h-[60px] bg-green-300 hover:font-bold">
                <div class="flex justify-center items-center w-16 h-full">
                  <FaHistory class="m-[15px] text-blue-800 text-[40px] cursor-pointer m-2"></FaHistory>
                </div>

                <span class={`duration-100 ${!props.open && "scale-0 w-0"}`}>
                  History
                </span>
              </div>
            </NavLink>
          </div>

          <div class="bg-red-900 w-full h-[60px] absolute bottom-0 duration-300">
            <div class="w-full h-full relative">
              <NavLink to="/admin/history">
                <div class="flex justify-start items-center w-full h-[60px] bg-green-300 hover:font-bold">
                  <div class="flex justify-center items-center w-16 h-full">
                    <BiLogOut class="m-[15px] text-blue-800 text-[40px] cursor-pointer m-2"></BiLogOut>
                  </div>

                  <span class={`duration-100 ${!props.open && "scale-0 w-0"}`}>
                    Log Out
                  </span>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideNav;
