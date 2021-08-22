import React, { useState, useEffect } from "react";
import {Question} from "./components";

const API_URL = 'http://localhost:8000/quiz'

function App() {
  const [quiz, setQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentIndex, setcurrentIndex] = useState(0);
  const [keyNameWinnerScore, setKeyNameWinnerScore] = useState('');
  const [gameEnded, setGameEnded] = useState(false);
  const [score, setScore] = useState( {
     stern: 0,
     funny: 0,
     outgoing: 0,
     shy: 0
  } );
  
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuiz(data);
        setCurrentQuestion(data.questions[currentIndex+1])  
      })
    
  }, [currentIndex]);

  const getKeyMaxValue = (object) => {
    let max = 0;
    let keyName  = '';
    for(let key in object){
      if(object[key] > max ){
          max = object[key];
          keyName = key; 
      }

    }
    return keyName;
  }   

  const handleOfAnswers =(answer) => { 
    
     score[answer]++;
     setScore(score);

     const newIndex = currentIndex+1; 
     setcurrentIndex(newIndex);
  
     if(currentIndex >= quiz.questions.length - 1) {
      setKeyNameWinnerScore(getKeyMaxValue(score));
      setGameEnded(true);
     };     
    
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setcurrentIndex(0);
    setScore({
      stern: 0,
      funny: 0,
      outgoing: 0,
     shy: 0
   });
   setKeyNameWinnerScore('');
   setGameEnded(false);
  }

  return gameEnded ? (
    <div className = "m-40 text-center text-gray-400 bg-green-100 rounded-lg shadow-2xl p-5">{quiz.results[keyNameWinnerScore]}
    <button onClick={resetQuiz} className="transition duration-500 ease-in-out bg-green-500 text-white transform hover:-translate-y-1 hover:scale-110 w-15 p-2 rounded-lg shadow-xl mx-3 h-10" >Try again</button>
    </div>
  ) : ( 
    Object.keys(quiz).length > 0 ? (
    <div className="container mx-auto px-4 text-gray-400">
      <div>
          <h1 className="p-5 text-2xl text-center subpixel-antialiased pt-10 border-double rounded-full shadow-2xl">{quiz.title}</h1>
      </div>
       
       <Question questions={quiz.questions[currentIndex]} handleOfAnswers={handleOfAnswers} />
       
    </div>

  ) : (
    <h2>Loading...</h2>
  ));
}

export default App;
