import React, { useState } from "react";
import Question from "./question";

export default function QuestionsWrapper(props: { questions: any[] }) {
  const [showAnswer, setShowAnswer] = useState(false);

  // var questionParsed = JSON.parse(props.questions);

  var questionItems = props.questions.map((question) => (
    <Question
      key={question.QuestionNumber}
      qnumber={question.QuestionNumber}
      qquestion={question.question}
      answerChoices={question.answerChoices}
      answer={question.answer}
      showAnswer={showAnswer}
    ></Question>
  ));

  function showAnswers() {
    console.log("Show answers.");
    setShowAnswer(true);
  }

  return (
    <div>
      <ul id="questions">{questionItems}</ul>
      <button
        onClick={() => {
          showAnswers();
        }}
      >
        Submit
      </button>
    </div>
  );
}
