import './App.css';
import QuestionsWrapper from './components/questionsWrapper';

function App() {

  var questions = [
    { "QuestionNumber":1,
      "question":"What is MC for part 3 of Jojo?",
      "answerChoices":
      ["Kars", "Jotaro", "Josuke", "Norisuke"],
      "answer":"Jotaro"},
    {"QuestionNumber":2,
    "question":"What does the stand \"Star Platinum\" do?",
    "answerChoices":
    ["Stop Time","Restore Broken Things", "Manipulate Fire", "Transform into Anything"],
    "answer":"Stop Time"},
    {"QuestionNumber":3,
      "question":"Whose stand is \"Magician's Red\"?",
      "answerChoices":
      ["Jotaro","Jonathan","DIO","Avdol"],
      "answer":"Avdol"}
      // ,
    // {"QuestionNumber":4,
    // "question":"What's the name of Jotaro's daughter?"},
    // {"QuestionNumber":5,
    // "question":"How many stand names does Pucci have?"},
    // {"QuestionNumber":6,
    // "question":"Whose stand is \"C-Moon\"?"}
  ];

  return (
    <div className="App">
      <div>
        <QuestionsWrapper questions={questions}></QuestionsWrapper>
      </div>
    </div>
  );
}

export default App;
