import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import Button from "./Button";

function Side_nav(props) {
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
            <div class="flex justify-start items-center w-full h-[60px] bg-green-300">
              <BiBookmark class="bg-white rounded-xl text-5xl cursor-pointer m-2"></BiBookmark>
              <Link to="/admin_main">
                <span class={`${!props.open && "hidden"}`}>Questions</span>
              </Link>
            </div>

            {/* Sidenav Option 2 */}
            <div class="flex justify-start items-center w-full h-[60px] bg-green-300">
              <BiBookmark class="bg-white rounded-xl text-5xl cursor-pointer m-2"></BiBookmark>
              <Link to="/create_questions">
                <span class={`${!props.open && "hidden"}`}>
                  Create Questions
                </span>
              </Link>
            </div>

            {/* Sidenav Option 3 */}
            <div class="flex justify-start items-center w-full h-[60px] bg-green-300">
              <BiBookmark class="bg-white rounded-xl text-5xl cursor-pointer m-2"></BiBookmark>
              <Link to="/create_quiz">
                <span class={`${!props.open && "hidden"}`}>Create Quiz</span>
              </Link>
            </div>

            {/* Sidenav Option 4 */}
            <div class="flex justify-start items-center w-full h-[60px] bg-green-300">
              <BiBookmark class="bg-white rounded-xl text-5xl cursor-pointer m-2"></BiBookmark>
              <Link to="/history">
                <span class={`${!props.open && "hidden"}`}>History</span>
              </Link>
            </div>
          </div>

          <div
            class={`bg-red-900 w-full h-[60px] absolute bottom-0 duration-300 ${
              !props.open && "scale-0"
            }`}
          >
            <div class="w-full h-full relative">
              <Button
                buttonType="button"
                buttonClassName="absolute bottom-2 z-10 text-green bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-1/2 px-5 py-2.5 text-center mt-10"
                buttonLabel="Log Out"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Side_nav;
