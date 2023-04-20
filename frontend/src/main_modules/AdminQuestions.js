import QuestionsSection from "../components/QuestionsSection";

function AdminQuestions(props) {
  return (
    <>
      <div className="flex">
        <div
          className={`bg-gray-100 w-full h-vh min-h-screen overlflow-y-scroll p-5 ${
            props.open ? "ml-72" : "ml-16"
          } duration-200`}
        >
          <div>
            {/* Heading */}
            <div className="w-full bg-red-200 p-2 mb-3">
              <h1 className="text-xl font-bold text-gray-800">Questions</h1>
            </div>
          </div>
          <QuestionsSection open={props.open} />
        </div>
      </div>
    </>
  );
}

export default AdminQuestions;
