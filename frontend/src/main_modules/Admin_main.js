import Questions_section from "./Questions_section";
import Side_nav from "../components/Side_nav";
import { useState } from "react";

function Admin_main() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div class="flex">
        <Side_nav open={open} onOpen={() => setOpen(!open)} />
        <Questions_section open={open} />
      </div>
    </>
  );
}

export default Admin_main;
