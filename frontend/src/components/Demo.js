import Major_side from "./Major_side";
import Minor_side from "./Minor_side";

function Demo() {
  return (
    <>
      <h1>Hi there!</h1>
      <div className="flex w-full h-screen">
        <Major_side></Major_side>
        <Minor_side></Minor_side>
      </div>
    </>
  );
}

export default Demo;
