import React, {useState} from 'react';
import Question from './question';

export default function QuestionsWrapper(props){

    const [showAnswer, setShowAnswer] = useState(false);

    // var questionParsed = JSON.parse(props.questions);

    const handleCorrectCount = (correctAnswer, qnumber) => {
        var tmp = correctsCount;
        if(correctAnswer === true){
            tmp[qnumber-1] = true;
            setCorrectsCount(tmp); 
        }else{
            tmp[qnumber-1] = false;
            setCorrectsCount(tmp); 
        }
        const count = correctsCount.filter(Boolean).length;
        setCorrectNumber(count);
    }

    var questionItems = (props.questions !== undefined) ? 
        props.questions.map((question) => 
        <Question key={question.QuestionNumber} qnumber={question.QuestionNumber} qquestion={question.question}
            answerChoices={question.answerChoices} answer={question.answer} showAnswer={showAnswer} onCorrectCount={handleCorrectCount}></Question>
    ): <p>Questions are loading, or no question is available</p>;
    
    var arrlen = (props.questions !== undefined) ? props.questions.length:0;
    const [correctsCount, setCorrectsCount] = useState(Array(arrlen));
    const [correctNumber, setCorrectNumber] = useState(0)


    

    function showAnswers() {
        console.log("Show answers.")
        setShowAnswer(true);
    }

    var questionsStyle = {
        margin: "0px"
    }

    return <div>
        <p style={questionsStyle}>Number of correct answers is: {correctNumber}</p>
        <ul id="questions" style={questionsStyle}>{questionItems}</ul>
        <button onClick={()=>{showAnswers();}}>Submit</button>
    </div>;
}