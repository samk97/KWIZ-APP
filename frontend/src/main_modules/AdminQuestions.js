import QuestionsSection from "../components/QuestionsSection";

function AdminQuestions(props) {
  return (
    <>
      <div class="flex">
        <QuestionsSection open={props.open} />
      </div>
    </>
  );
}

export default AdminQuestions;
