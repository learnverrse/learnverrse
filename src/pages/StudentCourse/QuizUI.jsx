import React, { use } from 'react';
import { useState } from 'react';
const questions = [
  {
    questionText: 'What is the capital of france?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },

  {
    questionText: 'Who is the CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Bola Tinubu', isCorrect: false },
    ],
  },

  {
    questionText: 'What does HTML stands for?',
    answerOptions: [
      { answerText: 'HyperText MarkUp Language', isCorrect: true },
      { answerText: 'HyperText MockUp Language', isCorrect: false },
      { answerText: 'HyperText MakeUp Language', isCorrect: false },
      { answerText: 'HyperTetic MakeUP Language', isCorrect: false },
    ],
  },
];

const QuizUI = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowscore] = useState(false);

  const handleAnswer = (index, isCorrect) => {
    setIsAnswered(true);
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowscore(true);
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

  return (
    <>
      {showScore ? (
        <div>
          You score {score} / {questions.length}
        </div>
      ) : (
        <div className="flex justify-between bg-gray-50 p-4">
          <div className="w-9/12 p-4">
            <p className="text-[#6B6B6B]">
              Please answer the following questions to test your understanding
              of the course. Select the best answer for each question, You can
              review your response before submitting
            </p>
            <p className="mt-3 mb-5 font-medium italic">
              The duration for this quiz is 15 minutes
            </p>

            <div className="mb-10 rounded-md bg-white p-5 shadow-md">
              {/* Question header */}
              <h2 className="mb-4 text-xl font-bold">
                Question {currentQuestion + 1} of {questions.length}
              </h2>

              {/* Question text */}
              <p className="mb-6">{questions[currentQuestion].questionText}</p>
              <div className="mb-5">
                {questions[currentQuestion].answerOptions.map(
                  (option, index) => (
                    <button
                      onClick={() => handleAnswer(index, option.isCorrect)}
                      key={index}
                      className={`hover:bg-primary-100 block w-full cursor-pointer rounded-lg border px-3.5 py-2 text-start ${
                        isAnswered
                          ? option.isCorrect
                            ? 'bg-primary-700 hover:bg-primary-700'
                            : selectedAnswer === index
                              ? 'bg-red-700 hover:bg-red-700'
                              : ''
                          : ''
                      }`}
                    >
                      {option.answerText}
                    </button>
                  )
                )}
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between">
                <button
                  className="bg-primary-500 rounded px-4 py-2 text-white"
                  onClick={prevQuestion}
                >
                  Back
                </button>
                <button
                  className={`${isAnswered ? 'bg-primary-500' : 'bg-primary-200 cursor-no-drop'} rounded px-8 py-2 text-white`}
                  disabled={isAnswered ? '' : 'disabled'}
                  onClick={nextQuestion}
                >
                  Next
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
      )}
    </>
  );
};

export default QuizUI;
