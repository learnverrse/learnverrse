import React from 'react';
import { naira, checkIcon } from '../components/details';

const PaymentSection = () => {
  return (
    <div className="bg-primary-50 flex w-full flex-col items-center justify-center py-12 lg:min-h-screen lg:py-20">
      <div className="container mt-10 flex w-full flex-col items-center justify-center">
        <h2 className="mb-4 text-3xl font-semibold text-[#121212] lg:text-5xl lg:font-medium">
          Plans For You
        </h2>
        <p className="text-lg lg:text-2xl">
          Choose the plan that fits your needs
        </p>

        <div className="m-auto grid grid-cols-1 gap-6 px-10 py-8 md:max-w-4xl md:grid-cols-2 lg:max-w-none">
          {/* Basic Plan */}
          <div className="flex flex-col rounded-2xl bg-white px-10 py-14 lg:py-16">
            <h2 className="text-2xl font-bold">Basic Plan</h2>
            <p className="mt-5 text-sm">Introductory and beginner friendly courses</p>
            <div className="mt-10 flex gap-x-1">
              <div className="flex">
                <img src={naira} alt="" />
                <p className="font-montserrat text-4xl leading-5 font-bold">
                  0
                </p>
              </div>
              <p className="text-sm leading-5">7 days</p>
            </div>
            <button className="bg-primary-500 mt-7 cursor-pointer px-12 py-2.5 text-sm leading-5 text-white hover:bg-purple-700 lg:px-20 rounded-lg">
              Access course
            </button>
            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>No payment for 7 days</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Unlimited access to all eligible courses</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Watch videos, take quizzes & view course materials</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Personalized dashboard & course recommendation</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Access to premium educator content</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Monthly badge streak bonuses</p>
              </div>
            </div>
          </div>

          {/* Learner Plan */}
          {/* <div className="flex flex-col rounded-2xl bg-white px-10 py-14 lg:py-16">
            <h2 className="text-2xl font-bold">Learner</h2>
            <p className="mt-5 text-sm">
              For learners serious about leveling up
            </p>
            <div className="mt-10 flex gap-x-1">
              <div className="flex">
                <img src={naira} alt="" />
                <p className="font-montserrat text-4xl leading-5 font-bold">
                  5,000
                </p>
              </div>
              <p className="text-sm leading-5">per month</p>
            </div>
            <button className="bg-primary-500 mt-7 cursor-pointer px-12 py-2.5 text-sm leading-5 text-white hover:bg-purple-700 lg:px-20">
              Subscribe Now
            </button>
            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Unlimited courses</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Completion Certificates</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Quiz & assignment grading</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Priority learner support</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Access to private learning groups</p>
              </div>
            </div>
          </div> */}

          {/* Educator Plan */}
          <div className="flex flex-col rounded-2xl bg-white px-10 py-14 md:col-span-2 md:mx-auto md:max-w-md lg:col-span-1 lg:max-w-none lg:py-16">
            <h2 className="text-2xl font-bold">Premium Plan</h2>
            <p className="mt-5 text-sm">
              Masterclasses & Industry certified courses
            </p>
            <div className="mt-10 flex gap-x-1">
              <div className="flex">
                <img src={naira} alt="" />
                <p className="font-montserrat text-4xl leading-5 font-bold">
                  10,000
                </p>
              </div>
              <p className="text-sm leading-5">per month</p>
            </div>
            <button className="bg-primary-500 mt-7 cursor-pointer px-12 py-2.5 text-sm leading-5 text-white hover:bg-purple-700 lg:px-20 rounded-lg">
              Get Started
            </button>
            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Unlimited access to all eligible courses</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Access to premium educator content</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Monthly badge streak bonuses</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Personalized dashboard & course recommendation</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Watch videos, take quizzes & view course materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
