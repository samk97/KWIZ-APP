import QuestionForm from "../components/QuestionForm";

function AdminCreateQuestions(props) {
  return (
    <>
      <div class="flex">
        <QuestionForm open={props.open} />
      </div>
    </>
  );
}

export default AdminCreateQuestions;
