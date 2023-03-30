import SideNav from "../components/SideNav";
import { useState } from "react";
import QuestionForm from "../components/QuestionForm";

function AdminCreateQuestions(props) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div class="flex">
        <SideNav open={open} onOpen={() => setOpen(!open)} />
        <QuestionForm open={open} />
      </div>
    </>
  );
}

export default AdminCreateQuestions;
