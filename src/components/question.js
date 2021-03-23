import React, {useState} from 'react';
import "./css/question.css";
import { useDispatch} from 'react-redux';
// import { useSelector } from 'react-redux';

export default function Question(props){

    const [selected, setSelected] = useState("Choose");
    const [questionStyle, setQuestionStyle] = useState('question');
    const [answerClass, setAnswerClass] = useState('answer')

    const dispatch = useDispatch();

    var questionCSS = {
        height: "300px"
    }

    var answerChoicesStyle = {
        display:"flexbox",
        alignItems: "center"
    }

    var answerChoicesItems = (props.answerChoices !== undefined) ? props.answerChoices.map((choice) =>
    <option key={choice} value={choice}>{choice}</option>   
    ) : [];
    answerChoicesItems.unshift(<option key="" value="" >Choose</option>);

    if(props.showAnswer === true &&  answerClass !== 'showAnswer'){
        setAnswerClass('showAnswer');
        var tmpqs = questionStyle.split(' ');
        if (!tmpqs.includes('showAnswer')){
            tmpqs.push('showAnswer');
        }
        setQuestionStyle(tmpqs.join(' '));
    }

    var answerImg = (props.answer !== undefined) ? 
    <img className={answerClass} src={props.answer.answerImage} alt={props.answer.answerString} height="60%"/>
    : <p>Image not available</p>;

    function handleChange(e){
        setSelected(e.target.value);
        var qnum = props.qnumber;
        var cor = false;
        var tmpqs = questionStyle.split(' ');
        if(props.answer.answerString === e.target.value){
            tmpqs.push('correct')
            if (tmpqs.includes('wrong')){
                tmpqs = tmpqs.filter(e => e !== 'wrong')
            }
            cor = true;
        }else{
            tmpqs.push('wrong');
            if (tmpqs.includes('correct')){
                tmpqs = tmpqs.filter(e => e !== 'correct');
            }
            cor = false;
        }
        var qs = tmpqs.join(' ')
        setQuestionStyle(qs);
        dispatch({type:"SET_CORRECT", payload: {cor: cor, qnum:qnum}});
        // const counter = useSelector(state => state.todos);
        // console.log(counter.correctArray);
    }


    
    return <div className={questionStyle} style={questionCSS}>
        <div>Question {props.qnumber}</div>
        <br></br>
        <div>{props.qquestion}</div>
        <br></br>
        <select value={selected} onChange={handleChange} style={answerChoicesStyle}>
            {answerChoicesItems}
        </select>
        <br></br>
        <div className={answerClass}>Answer: {props.answer.answerString}</div>
        {answerImg}
    </div>
}
