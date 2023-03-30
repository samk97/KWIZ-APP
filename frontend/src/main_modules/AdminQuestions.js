import QuestionsSection from "../components/QuestionsSection";
import SideNav from "../components/SideNav";
import { useState } from "react";

function AdminQuestions() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div class="flex">
        <SideNav open={open} onOpen={() => setOpen(!open)} />
        <QuestionsSection open={open} />
      </div>
    </>
  );
}

export default AdminQuestions;
