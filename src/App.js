import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import QuestionsWrapper from './components/questionsWrapper';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  // var questions = ;

  var appStyle = {
    backgroundColor: "#617691",
  }

  const [axTest, setAxTest] = useState();

  useEffect(() => {
    axios.get(`https://golang-sample-111112.herokuapp.com/`)
    .then(res => {
      const persons = res.data;
      setAxTest(persons);
    })
    // return () => {
    //   cleanup
    // }
  }, [axTest])

  return (
    <div style={appStyle} className="App">
      <Provider store={store}>
        <QuestionsWrapper questions={axTest}></QuestionsWrapper>
      </Provider>
    </div>
  );
}

export default App;
