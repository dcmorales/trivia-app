import React, { useState } from 'react';
import opentdb from './apis/opentdb';
import HomeScreen from './components/screens/HomeScreen';
import QuizScreen from './components/screens/QuizScreen';
import ResultScreen from './components/screens/ResultScreen';
import LoadingScreen from './components/screens/LoadingScreen';
import ErrorScreen from './components/screens/ErrorScreen';

import './sass/main.scss';

function App() {
  const [triviaQuestions, setTriviaQuestions] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(-1);
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
    } catch {
      setErrorMessage('Sorry, there was an error. Please try again later.');
    }
  };

  const handleBeginClick = () => {
    setCurrentQuestionIdx((prevQuestionIdx) => prevQuestionIdx + 1);
    getTriviaQuestions();
  };

  const handleAnswerClick = (userAnswer, question) => {
    question.userAnswer = userAnswer;
    if (answeredQuestions.includes(question)) {
      return;
    } else {
      setAnsweredQuestions((prevQuestions) => [...prevQuestions, question]);
    }

    setTimeout(() => {
      setCurrentQuestionIdx((prevQuestionIdx) => prevQuestionIdx + 1);
    }, 500);

    if (userAnswer === question.correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIdx + 1 === triviaQuestions.length) {
      setShowScore(true);
    }
  };

  const resetError = () => {
    setCurrentQuestionIdx(-1);
    setErrorMessage('');
  };

  const resetTrivia = () => {
    setTriviaQuestions([]);
    setShowScore(false);
    setAnsweredQuestions([]);
    setCurrentQuestionIdx(-1);
    setScore(0);
  };

  return (
    <div className="screen-container">
      <HomeScreen
        currentQuestionIdx={currentQuestionIdx}
        handleBeginClick={handleBeginClick}
      />

      <QuizScreen
        currentQuestionIdx={currentQuestionIdx}
        triviaQuestions={triviaQuestions}
        handleAnswerClick={handleAnswerClick}
      />

      <ResultScreen
        triviaQuestions={triviaQuestions}
        currentQuestionIdx={currentQuestionIdx}
        showScore={showScore}
        answeredQuestions={answeredQuestions}
        score={score}
        resetTrivia={resetTrivia}
      />

      {!errorMessage ? (
        !triviaQuestions.length &&
        currentQuestionIdx !== -1 && <LoadingScreen />
      ) : (
        <ErrorScreen errorMessage={errorMessage} resetError={resetError} />
      )}
    </div>
  );
}

export default App;
