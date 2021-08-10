import React from 'react';

const AnswerFeedbackContext = React.createContext({
  matchedAnswer: null,
  setMatchedAnswer: () => {},
});

export default AnswerFeedbackContext;
