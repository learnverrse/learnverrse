import React from 'react';
import { useState } from 'react';
import CongratScreen from './CongratScreen';

const QuizUI = () => {
  const quizQuestions = [
    {
      question: 'What is the capital of france?',
      options: ['Beijin', 'London', 'Rome', 'Paris'],
      answer: 'Paris',
    },
    {
      question: 'What Language is used for web app?',
      options: ['JavaScript', 'PHP', 'Python', 'All'],
      answer: 'All',
    },
    {
      question: 'What does JSX stand for?',
      options: [
        'JavaScript XML',
        'Just a Simple Example',
        'Java Syntax Extension',
        'None of the above',
      ],
      answer: 'JavaScript XML',
    },
    {
      question: 'Who is the ceo of tesla?',
      options: ['Elon Musk', 'Jeff Bezos', 'Bill Gate', 'Bola Tinubu'],
      answer: 'Elon Musk',
    },
    {
      question: 'What does HTML stands for?',
      options: [
        'HyperText MarkUp Language',
        'HyperText MockUp Language',
        'HyperText MakeUp Language',
        'HyperTetic MakeUP Language',
      ],
      answer: 'HyperText MarkUp Language',
    },
  ];

  const [isQuizFinished, setQuizFinished] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const initialAnswers = [null, null, null, null, null];

  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  const selectedAnswer = userAnswers[currentQuestion];

  const handleAnswer = (option) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;

    setUserAnswers(newUserAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion === quizQuestions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const radius = 60; // circle radius
  const strokeWidth = 10; // thickness of the ring
  const circumference = 2 * Math.PI * radius;

  /* 45 % of the ring filled */
  const progress = 0.45;
  const dashOffset = circumference * (1 - progress);

  if (isQuizFinished) {
    return (
      <CongratScreen userAnswers={userAnswers} quizQuestions={quizQuestions} />
    );
  }

  return (
    <div className="flex justify-between bg-gray-50 p-4">
      <div className="w-9/12 p-4">
        <p className="text-[#6B6B6B]">
          Please answer the following questions to test your understanding of
          the course. Select the best answer for each question, You can review
          your response before submitting
        </p>
        <p className="mt-3 mb-5 font-medium italic">
          The duration for this quiz is 15 minutes
        </p>

        <div className="mb-10 rounded-md bg-white p-5 shadow-md">
          <p>
            Question {currentQuestion + 1} of {quizQuestions.length}
          </p>

          <h1 className="mb-6">{quizQuestions[currentQuestion].question}</h1>
          <div className="mb-5">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`hover:bg-primary-100 block w-full cursor-pointer rounded-lg border px-3.5 py-2 text-start ${selectedAnswer === option ? 'bg-primary-500 hover:bg-primary-500' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="bg-primary-500 disabled:bg-primary-200 cursor-pointer rounded px-4 py-2 text-white disabled:cursor-no-drop"
            >
              Back
            </button>
            <button
              onClick={nextQuestion}
              disabled={!selectedAnswer}
              className="bg-primary-500 disabled:bg-primary-200 cursor-pointer rounded px-8 py-2 text-white disabled:cursor-no-drop"
            >
              {currentQuestion === quizQuestions.length - 1 && selectedAnswer
                ? 'Finish Quiz'
                : 'Next'}
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-64 w-64 flex-col items-center rounded-lg bg-white p-6 shadow-md">
        {/* Ring + time label */}
        <div className="relative">
          <svg
            className="-rotate-90" /* start arc at 12 o’clock   */
            width={(radius + strokeWidth) * 2}
            height={(radius + strokeWidth) * 2}
          >
            {/* grey track */}
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              strokeWidth={strokeWidth}
              className="text-gray-200"
              stroke="currentColor"
              fill="transparent"
            />

            {/* purple arc */}
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
            5:30
          </span>
        </div>

        <p className="mt-8 font-medium">Time Remaining</p>
      </div>
    </div>
  );
};

export default QuizUI;
