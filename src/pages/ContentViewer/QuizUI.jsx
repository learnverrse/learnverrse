import React, { useState, useEffect } from 'react';
import CongratScreen from './CongratScreen';

const QuizUI = ({ onQuizComplete, onCloseQuiz }) => {
  const quizQuestions = [
    {
      question: 'What is the capital of France?',
      type: 'multiple-choice',
      options: ['Beijing', 'London', 'Rome', 'Paris'],
      answer: 'Paris',
    },
    {
      question: 'What language is used for web apps?',
      type: 'multiple-choice',
      options: ['JavaScript', 'PHP', 'Python', 'All'],
      answer: 'All',
    },
    {
      question: 'JSX stands for JavaScript XML.',
      type: 'true-false',
      answer: 'True',
    },
    {
      question: 'Who is the CEO of Tesla?',
      type: 'multiple-choice',
      options: ['Elon Musk', 'Jeff Bezos', 'Bill Gates', 'Bola Tinubu'],
      answer: 'Elon Musk',
    },
    {
      question: 'HTML stands for HyperText Markup Language.',
      type: 'true-false',
      answer: 'True',
    },
    {
      question: 'React is a programming language.',
      type: 'true-false',
      answer: 'False',
    },
  ];

  const [isQuizFinished, setQuizFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(quizQuestions.length).fill(null)
  );
  const [timeRemaining, setTimeRemaining] = useState(5 * 60); // 5 minutes in seconds
  const [timerActive, setTimerActive] = useState(true);
  const [quizStartTime] = useState(Date.now());
  const [quizEndTime, setQuiZEndTime] = useState(null);

  const selectedAnswer = userAnswers[currentQuestion];
  const currentQuestionData = quizQuestions[currentQuestion];

  useEffect(() => {
    let interval;
    if (timerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setQuizFinished(true);
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timeRemaining, timerActive]);

  const handleAnswer = (option) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;
    setUserAnswers(newUserAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion === quizQuestions.length - 1) {
      setQuizFinished(true);
      setTimerActive(false);
      handleSubmitQuiz();
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeTaken = () => {
    if (!quizStartTime || !quizEndTime) return null;
    else return quizEndTime - quizStartTime;
  };

  const formatTimeTaken = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.ceil(totalSeconds / 60);
    const label = minutes === 1 ? 'minute' : 'minutes';
    return `${minutes} ${label}`;
  };

  const handleSubmitQuiz = () => {
    const endTime = Date.now();
    setQuiZEndTime(endTime);
  };

  const handleTryAgain = () => {
    setCurrentQuestion(0);
    setUserAnswers(Array(quizQuestions.length).fill(null));
    setTimeRemaining(5 * 60);
    setTimerActive(true);
    setQuizFinished(false);
    setQuiZEndTime(null);
  };

  const timeTaken = getTimeTaken();

  const radius = 60;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const progress = 1 - timeRemaining / (5 * 60);
  const dashOffset = circumference * (1 - progress);

  // Render True/False options
  const renderTrueFalseOptions = () => {
    const trueFalseOptions = ['True', 'False'];
    return (
      <div className="mb-5 flex gap-4">
        {trueFalseOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className={`hover:bg-primary-100 flex-1 cursor-pointer rounded-lg border px-6 py-3 text-center font-medium ${
              selectedAnswer === option
                ? 'border-primary-500 bg-primary-500 hover:bg-primary-500 text-white'
                : 'border-gray-300'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  // Render Multiple Choice options
  const renderMultipleChoiceOptions = () => {
    return (
      <div className="mb-5 space-y-3">
        {currentQuestionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`hover:bg-primary-100 block w-full cursor-pointer rounded-lg border px-3.5 py-2 text-start ${
              selectedAnswer === option
                ? 'border-primary-500 bg-primary-500 hover:bg-primary-500 text-white'
                : 'border-gray-300'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  if (isQuizFinished) {
    return (
      <CongratScreen
        userAnswers={userAnswers}
        quizQuestions={quizQuestions}
        onContinue={onQuizComplete}
        onReview={() => setQuizFinished(false)}
        onClose={onCloseQuiz}
        onTryAgain={handleTryAgain}
        formatTimeTaken={formatTimeTaken}
        timeTaken={timeTaken}
      />
    );
  }

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col justify-between bg-gray-50 p-4 md:flex-row">
      <div className="w-full p-4 md:w-9/12">
        <p className="text-[#6B6B6B]">
          Please answer the following questions to test your understanding of
          the course. Select the best answer for each question. You can review
          your response before submitting.
        </p>
        <p className="mt-3 mb-5 font-medium italic">
          The duration for this quiz is 15 minutes
        </p>

        <div className="mb-10 rounded-md bg-white p-5 shadow-md">
          <p>
            Question {currentQuestion + 1} of {quizQuestions.length}
          </p>
          
          {/* Question Type Indicator */}
          <div className="mb-2">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
              {currentQuestionData.type === 'true-false' ? 'True/False' : 'Multiple Choice'}
            </span>
          </div>

          <h1 className="mb-6 text-xl font-semibold">
            {currentQuestionData.question}
          </h1>

          {/* Render options based on question type */}
          {currentQuestionData.type === 'true-false' 
            ? renderTrueFalseOptions() 
            : renderMultipleChoiceOptions()
          }

          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="bg-primary-500 disabled:bg-primary-200 rounded px-4 py-2 text-white disabled:cursor-not-allowed"
            >
              Back
            </button>
            <button
              onClick={nextQuestion}
              disabled={!selectedAnswer}
              className="bg-primary-500 disabled:bg-primary-200 rounded px-8 py-2 text-white disabled:cursor-not-allowed"
            >
              {currentQuestion === quizQuestions.length - 1
                ? 'Finish Quiz'
                : 'Next'}
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-64 w-full flex-col items-center rounded-lg bg-white p-6 shadow-md md:w-64">
        <div className="relative">
          <svg
            className="-rotate-90"
            width={(radius + strokeWidth) * 2}
            height={(radius + strokeWidth) * 2}
          >
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              strokeWidth={strokeWidth}
              className="text-gray-200"
              stroke="currentColor"
              fill="transparent"
            />
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              strokeWidth={strokeWidth}
              className="text-purple-600"
              stroke="currentColor"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-3xl">
            {formatTime(timeRemaining)}
          </span>
        </div>
        <p className="mt-8 font-medium">Time Remaining</p>
      </div>
    </div>
  );
};

export default QuizUI;