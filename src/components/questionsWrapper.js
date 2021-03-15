import React, {useState} from 'react';
import Question from './question';

export default function QuestionsWrapper(props){

    const [showAnswer, setShowAnswer] = useState(false);

    // var questionParsed = JSON.parse(props.questions);

    var questionItems = (props.questions !== undefined) ? 
        props.questions.map((question) => 
        <Question key={question.QuestionNumber} qnumber={question.QuestionNumber} qquestion={question.question}
            answerChoices={question.answerChoices} answer={question.answer} showAnswer={showAnswer}></Question>
    ): [];
    ;

    function showAnswers() {
        console.log("Show answers.")
        setShowAnswer(true);
    }

    var questionsStyle = {
        margin: "0px"
    }

    return <div>
        <ul id="questions" style={questionsStyle}>{questionItems}</ul>
        <button onClick={()=>{showAnswers();}}>Submit</button>
    </div>;
}