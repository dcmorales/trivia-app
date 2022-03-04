import React, { useState } from 'react';
import opentdb from './apis/opentdb';
import HomeScreen from './components/screens/HomeScreen';
import QuizScreen from './components/screens/QuizScreen';
import ResultScreen from './components/screens/ResultScreen';
import LoadingScreen from './components/screens/LoadingScreen';
import AnswerFeedbackContext from './contexts/AnswerFeedbackContext';

import './sass/main.scss';

function App() {
  const [triviaQuestions, setTriviaQuestions] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const nextQuestion = currentQuestion + 1;
  const [matchedAnswer, setMatchedAnswer] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const getTriviaQuestions = async () => {
    try {
      const res = await opentdb.get('/api.php', {
        params: {
          amount: 10,
          difficulty: 'hard',
          type: 'boolean',
        },
      });
      setTriviaQuestions(res.data.results);
    } catch (err) {
      setErrorMessage('Sorry, there was an error. Please try again later.');
    }
  };

  const handleBeginClick = () => {
    setCurrentQuestion(nextQuestion);
    getTriviaQuestions();
  };

  const handleAnswerClick = (userAnswer, question) => {
    question.userAnswer = userAnswer;
    if (answeredQuestions.includes(question)) {
      return;
    } else {
      setAnsweredQuestions(answeredQuestions.concat([question]));
    }

    setTimeout(() => {
      setCurrentQuestion(nextQuestion);
      setMatchedAnswer(null);
    }, 500);

    if (userAnswer === question.correct_answer) {
      setScore(score + 1);
      setMatchedAnswer(true);
    } else {
      setMatchedAnswer(false);
    }

    if (nextQuestion > triviaQuestions.length) {
      setShowScore(true);
    }
  };

  const resetTrivia = () => {
    setTriviaQuestions([]);
    setShowScore(false);
    setAnsweredQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setErrorMessage('');
  };

  return (
    <AnswerFeedbackContext.Provider value={{ matchedAnswer, setMatchedAnswer }}>
      <HomeScreen
        currentQuestion={currentQuestion}
        handleBeginClick={handleBeginClick}
      />

      <QuizScreen
        currentQuestion={currentQuestion}
        triviaQuestions={triviaQuestions}
        handleAnswerClick={handleAnswerClick}
      />

      <ResultScreen
        triviaQuestions={triviaQuestions}
        currentQuestion={currentQuestion}
        showScore={showScore}
        answeredQuestions={answeredQuestions}
        score={score}
        resetTrivia={resetTrivia}
      />

      <LoadingScreen
        triviaQuestions={triviaQuestions}
        currentQuestion={currentQuestion}
        errorMessage={errorMessage}
        resetTrivia={resetTrivia}
      />
    </AnswerFeedbackContext.Provider>
  );
}

export default App;
