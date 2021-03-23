import React, {useState} from 'react';
import Question from './question';
import { useDispatch, useSelector } from 'react-redux';


export default function QuestionsWrapper(props){

    const [showAnswer, setShowAnswer] = useState(false);

    var questionItems = (props.questions !== undefined) ? 
        props.questions.map((question) => 
        <Question key={question.QuestionNumber} qnumber={question.QuestionNumber} qquestion={question.question}
            answerChoices={question.answerChoices} answer={question.answer} showAnswer={showAnswer} ></Question>
    ): <p>Questions are loading, or no question is available</p>;
        

    function showAnswers() {
        console.log("Showing answers.")
        setShowAnswer(true);
    }

    var questionsStyle = {
        margin: "0px"
    }

    const dispatch = useDispatch();

    const counter = useSelector(state => state.todos);

    return <div>
        <p style={questionsStyle}>{counter.correctCount}</p>
        <ul id="questions" style={questionsStyle}>{questionItems}</ul>
        <button onClick={()=>{showAnswers();dispatch({type:"COUNT_CORRECT"})}}>Submit</button>
    </div>;
}