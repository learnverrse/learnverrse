import React from 'react';
import { heroImg, radialGradient, testimonialImg } from '../components/details';
import { useNavigate } from 'react-router';
import Button from '../components/UI/Button';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-white">
        <div className="container mx-auto">
          {/* hero section */}
          <div className="px-6">
            <div className="flex w-full flex-col-reverse items-center justify-between text-center lg:flex-row lg:text-start">
              <div className="m-auto mb-6 max-w-7xl md:mb-0 lg:w-1/2">
                <h1 className="mt-4 mb-4 text-3xl font-bold capitalize md:text-6xl lg:text-7xl">
                  Where curious minds meet
                  <span className="ml-4 rounded-lg bg-purple-100 px-4 py-2 font-serif text-purple-700 italic shadow-[0_0_15px_rgba(139,92,246,0.5)] md:text-4xl lg:text-5xl">
                    {' '}
                    expert
                  </span>{' '}
                  guides.
                </h1>

                <p className="mt-8 mb-8 flex text-lg text-black md:text-center lg:max-w-lg lg:text-start">
                  Fuel your curiosity with guidance from experts who've walked
                  the path—learn deeply, grow confidently, and turn potential
                  into progress.
                </p>

                <div className="z-20 flex flex-col justify-center space-y-4 space-x-4 md:flex-row md:space-y-0 lg:justify-start">
                  <Button label={'see plans'} active={true} fun={() => {}} />

                  <Button
                    label="Access your course"
                    active={false}
                    fun={() => navigate('/learning')}
                  />
                </div>

                <div className="mt-6 flex flex-col space-x-3 md:flex-row md:items-center">
                  <div className="flex -space-x-4">
                    <img src={testimonialImg} alt="" />
                    <img src={testimonialImg} alt="" />
                    <img src={testimonialImg} alt="" />
                  </div>

                  <p className="text-primary-600 mt-2 md:mt-0">
                    Join our users who benefit from our platform
                  </p>
                </div>
              </div>

              {/* img */}
              <div className="pointer-events-none flex justify-center">
                <img
                  src={heroImg}
                  alt="register now!!!"
                  className="w-[90%] max-w-sm sm:max-w-md lg:max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Radial gradient - breaks out of container on large screens */}
        <div className="pointer-events-none mt-[5px] w-full ">
          <img
            src={radialGradient}
            alt="purple gradient"
            className="w-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
