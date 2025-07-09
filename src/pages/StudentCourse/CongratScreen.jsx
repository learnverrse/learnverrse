import React from 'react';
import vectorImg from '@/assets/student-courses-images/Vector.png';

const CongratScreen = ({ userAnswers, quizQuestions }) => {
  console.log(quizQuestions, userAnswers);

  const getScore = () => {
    let userScore = 0;

    userAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].answer) {
        userScore++;
      }
    });

    return userScore;
  };

  const score = getScore();
  return (
    <div className="h-screen bg-gray-50 px-5 py-8">
      <div className="relative mx-auto flex w-11/12 flex-col rounded-md bg-white pb-28 shadow-lg">
        <h1 className="mt-24 mb-2 text-center">Congratulations</h1>
        <p className="text-center">
          Great Job! Your efforts are being reward, Keep going.
        </p>
        <div className="mx-auto my-10 flex w-11/12 justify-between rounded-full border px-8 py-5">
          <p className="flex items-center gap-1">
            <span>
              <img src={vectorImg} alt="" />
            </span>
            Score:
            <span>{score}/5</span>
          </p>
          <p className="flex items-center gap-1">
            <span>
              <img src={vectorImg} alt="" />
            </span>
            Time Taken:
            <span>7 minutes</span>
          </p>
          <p className="flex items-center gap-1">
            <span>
              <img src={vectorImg} alt="" />
            </span>
            Status:
            <span>Passed</span>
          </p>
        </div>
        <div className="flex justify-center">
          <button className="cursor-pointer rounded-lg border px-6 py-2">
            Review Quiz
          </button>
        </div>

        <button className="absolute right-1.5 bottom-1.5 cursor-pointer rounded-lg border px-4 py-2">
          Close
        </button>
      </div>
    </div>
  );
};

export default CongratScreen;
