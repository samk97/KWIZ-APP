import Questions_section from "./Questions_section";

import Side_nav from "../components/Side_nav";

function Admin_main() {
  return (
    <>
      <div class="flex">
        <Side_nav />
        <Questions_section />
      </div>
    </>
  );
}

export default Admin_main;
