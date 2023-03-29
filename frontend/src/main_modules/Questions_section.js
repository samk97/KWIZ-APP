import { useState } from "react";
import Question_area from "../components/Question_area";

function Questions_section() {
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* Questions */}
      <Question_area
        question="This is a dummy question 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        op_a="Lorem A This is a dummy question 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        op_b="Lorem B"
        op_c="Lorem C"
        op_d="Lorem D"
        ans="B"
      ></Question_area>
    </>
  );
}

export default Questions_section;
