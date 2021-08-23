import React from "react";

export default function Question(props: {
  answerChoices: any[];
  showAnswer: boolean;
  qnumber: any;
  qquestion: any;
  answer: any;
}) {
  var questionStyle = {
    border: "solid",
    borderRadius: "8px",
    display: "inline-block",
    margin: "10px",
    padding: "10px",
  };

  var answerChoicesStyle = {
    display: "flexbox",
    alignItems: "center",
  };

  var answerChoicesItems = props.answerChoices.map((choice) => (
    <option key={choice}>{choice}</option>
  ));

  var answerClass = "";
  if (props.showAnswer === true) {
    answerClass += "showAnswer";
  } else {
    answerClass += "answer";
  }

  return (
    <div style={questionStyle}>
      <div>Question {props.qnumber}</div>
      <br></br>
      <div>{props.qquestion}</div>
      <br></br>
      <select style={answerChoicesStyle}>{answerChoicesItems}</select>
      <br></br>
      {props.showAnswer ? <div>{props.answer}</div> : <div></div>}
    </div>
  );
}
