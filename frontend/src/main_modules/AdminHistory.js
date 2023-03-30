import SideNav from "../components/SideNav";
import { useState } from "react";

function AdminHistory(props) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div class="flex">
        <SideNav open={open} onOpen={() => setOpen(!open)} />
      </div>
    </>
  );
}

export default AdminHistory;
