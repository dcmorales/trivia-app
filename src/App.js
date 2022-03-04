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
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(-1);
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
    setCurrentQuestionIdx((prevQuestionIdx) => prevQuestionIdx + 1);
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
      setCurrentQuestionIdx((prevQuestionIdx) => prevQuestionIdx + 1);
      setMatchedAnswer(null);
    }, 500);

    if (userAnswer === question.correct_answer) {
      setScore(score + 1);
      setMatchedAnswer(true);
    } else {
      setMatchedAnswer(false);
    }

    if (currentQuestionIdx + 1 === triviaQuestions.length) {
      setShowScore(true);
    }
  };

  const resetTrivia = () => {
    setTriviaQuestions([]);
    setShowScore(false);
    setAnsweredQuestions([]);
    setCurrentQuestionIdx(-1);
    setScore(0);
    setErrorMessage('');
  };

  return (
    <AnswerFeedbackContext.Provider value={{ matchedAnswer, setMatchedAnswer }}>
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

      <LoadingScreen
        triviaQuestions={triviaQuestions}
        currentQuestionIdx={currentQuestionIdx}
        errorMessage={errorMessage}
        resetTrivia={resetTrivia}
      />
    </AnswerFeedbackContext.Provider>
  );
}

export default App;
