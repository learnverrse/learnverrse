import React from 'react';
import { blackMaleImg, femaleImg, maleImg } from '../components/details';
import Button from '@/components/UI/Button';

const FooterFaqSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#6d28d2] py-12 lg:py-16">
      <div className="container px-6 lg:px-10">
        <div className="m-auto flex w-[95%] flex-col-reverse items-center justify-between lg:w-[80%] lg:flex-row">
          <div className="w-full py-10 md:text-center lg:w-1/2 lg:text-left">
            <h2 className="mb-3 text-2xl font-bold text-white md:text-[52px] lg:mb-5">
              Start your learning journey today
            </h2>
            <p className="text-[14px] font-medium text-white md:text-2xl">
              Whether you are here to grow or to guide others Learnverrse is
              built for you.
            </p>

            <div className="mt-8 flex w-full flex-col items-center space-y-5 md:w-auto md:flex-row md:space-y-0 md:space-x-5">
              <button className="hover:text-primary-800 cursor-pointer rounded-2xl bg-white px-27 py-3 font-semibold lg:px-6">
                Start Learning
              </button>
              <button className="hover:text-primary-800 cursor-pointer rounded-2xl border border-white px-20 py-3 font-semibold text-white hover:bg-white lg:px-6">
                Become An Educator
              </button>
            </div>
          </div>

          <div className="footerImg flex items-center">
            <div className="flex flex-col">
              <img src={maleImg} alt="" />
              <img src={femaleImg} alt="" className="mt-5 w-[80%]" />
            </div>
            <div className="w-[80%]">
              <img src={blackMaleImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFaqSection;
