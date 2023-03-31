import QuestionForm from "../components/QuestionForm";

function AdminCreateQuestions(props) {
  return (
    <>
      <div className="flex">
        <QuestionForm open={props.open} />
      </div>
    </>
  );
}

export default AdminCreateQuestions;
