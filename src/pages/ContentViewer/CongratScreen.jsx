import React from 'react';
import vectorImg from '@/assets/student-courses-images/Vector.png';

const CongratScreen = ({
  userAnswers,
  quizQuestions,
  onContinue,
  onReview,
  onClose,
  onTryAgain,
  formatTimeTaken,
  timeTaken,
}) => {
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
  const passed = score >= Math.floor(quizQuestions.length * 0.7); // 70% to pass
  const percentage = Math.round((score / quizQuestions.length) * 100);

  return (
    <div className="h-[calc(100vh-80px)] bg-gray-50 px-5 py-8">
      <div className="relative mx-auto flex w-11/12 flex-col rounded-md bg-white pb-28 shadow-lg">
        <h1 className="mt-24 mb-2 text-center text-2xl font-bold">
          {passed ? 'Congratulations!' : 'Quiz Complete'}
        </h1>
        <p className="text-center text-gray-600">
          {passed 
            ? 'Great Job! Your efforts are being rewarded. Keep going.' 
            : 'Don\'t worry, you can try again to improve your score.'
          }
        </p>
        <div className="mx-auto my-10 grid w-11/12 grid-cols-1 gap-4 rounded-lg border p-6 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <img src={vectorImg} alt="" className="h-4 w-4" />
              <span className="font-medium">Score:</span>
            </div>
            <span className="text-lg font-bold">
              {score}/{quizQuestions.length} ({percentage}%)
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <img src={vectorImg} alt="" className="h-4 w-4" />
              <span className="font-medium">Time Taken:</span>
            </div>
            <span className="text-lg font-bold">
              {formatTimeTaken(timeTaken)}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <img src={vectorImg} alt="" className="h-4 w-4" />
              <span className="font-medium">Status:</span>
            </div>
            <span
              className={`text-lg font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}
            >
              {passed ? 'Passed' : 'Failed'}
            </span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 flex-wrap">
          {passed && (
            <>
              <button
                onClick={onReview}
                className="cursor-pointer rounded-lg border border-purple-600 px-6 py-2 text-purple-600 hover:bg-purple-50"
              >
                Review Quiz
              </button>
              <button
                onClick={onContinue}
                className="cursor-pointer rounded-lg bg-purple-600 px-6 py-2 text-white hover:bg-purple-700"
              >
                Continue to Next Section
              </button>
            </>
          )}
          
          {!passed && (
            <button
              onClick={onTryAgain}
              className="cursor-pointer rounded-lg bg-orange-600 px-6 py-2 text-white hover:bg-orange-700"
            >
              Try Again
            </button>
          )}
        </div>
        
        <button
          onClick={onClose}
          className="absolute right-4 bottom-4 cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CongratScreen;