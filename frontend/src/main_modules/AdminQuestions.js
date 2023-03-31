import QuestionsSection from "../components/QuestionsSection";

function AdminQuestions(props) {
  return (
    <>
      <div className="flex">
        <QuestionsSection open={props.open} />
      </div>
    </>
  );
}

export default AdminQuestions;
