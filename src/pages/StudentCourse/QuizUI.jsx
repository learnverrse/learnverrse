import React from 'react';

const QuizUI = () => {
  const radius = 60; // circle radius
  const strokeWidth = 10; // thickness of the ring
  const circumference = 2 * Math.PI * radius;

  /* 45 % of the ring filled */
  const progress = 0.45;
  const dashOffset = circumference * (1 - progress);

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
          {/* Question header */}
          <h2 className="mb-4 text-xl font-bold">Question 3 of 5</h2>

          {/* Question text */}
          <p className="mb-6">
            What is the main purpose of exploratory data analysis (EDA)?
          </p>

          <ul className="mb-8">
            <li className="cursor-pointer rounded-lg border px-3.5 py-2">
              <strong>A.</strong>
              To deploy machine learning models
            </li>
            <li className="cursor-pointer rounded-lg border px-3.5 py-2">
              <strong>B.</strong>
              To clean raw data for export
            </li>
            <li className="cursor-pointer rounded-lg border px-3.5 py-2">
              <strong>C.</strong>
              To summarize and visualize data patterns
            </li>
            <li className="cursor-pointer rounded-lg border px-3.5 py-2">
              <strong>D.</strong>
              To encrypt data for security
            </li>
          </ul>

          {/* Navigation buttons */}
          <div className="flex justify-between">
            <button className="bg-primary-500 rounded px-4 py-2 text-white">
              Back
            </button>
            <button className="bg-primary-500 rounded px-8 py-2 text-white">
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
  );
};

export default QuizUI;
