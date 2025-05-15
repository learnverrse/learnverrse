import { createContext, useState } from 'react';

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [selectedWeek, setSelectedWeek] = useState(1);

  const [questionByWeek, setQuestionByWeek] = useState({});

  console.log(questionByWeek);
  return (
    <QuizContext.Provider
      value={{
        selectedWeek,
        setSelectedWeek,

        questionByWeek,
        setQuestionByWeek,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
