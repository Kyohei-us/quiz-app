import React, {useState} from 'react';
import "./css/question.css";

export default function Question(props){

    const [selected, setSelected] = useState("Choose");

    var questionStyle = 'question';
    if(props.answer === selected && props.showAnswer === true){
        questionStyle += ' correct';
    }else if(props.answer !== selected && props.showAnswer === true){
        questionStyle += ' wrong';
    }

    var answerChoicesStyle = {
        display:"flexbox",
        alignItems: "center"
    }

    var answerChoicesItems = (props.answerChoices !== undefined) ? props.answerChoices.map((choice) =>
    <option key={choice} value={choice}>{choice}</option>   
    ) : [];
    answerChoicesItems.unshift(<option key="" value="" >Choose</option>);

    var answerClass = '';
    if(props.showAnswer === true){
        answerClass += 'showAnswer';
    }else{
        answerClass += 'answer'
    }

    function handleChange(e){
        setSelected(e.target.value);
    }
    
    return <div className={questionStyle}>
        <div>Question {props.qnumber}</div>
        <br></br>
        <div>{props.qquestion}</div>
        <br></br>
        <select value={selected} onChange={handleChange} style={answerChoicesStyle}>
            {answerChoicesItems}
        </select>
        <br></br>
        <div className={answerClass}>Answer: {props.answer}</div>
    </div>
}
