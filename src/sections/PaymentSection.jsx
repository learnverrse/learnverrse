import React from 'react'
import {naira, checkIcon, } from '../components/details';

const PaymentSection = () => {
  return (
    <div className="bg-primary-50 container mt-10 flex w-full flex-col items-center justify-center py-20">
            <h2 className="mb-4 text-3xl font-semibold lg:text-5xl lg:font-medium text-[#121212]">
              Plans For You
            </h2>
            <p className="text-lg lg:text-2xl">Choose the plan that fits your needs</p>

            <div className="grid grid-cols-1 gap-6 px-10 py-8 m-auto md:grid-cols-2 lg:grid-cols-3 md:max-w-4xl lg:max-w-none">
              {/* Starter Plan */}
              <div className="flex flex-col rounded-2xl bg-white py-14 px-10 lg:py-16">
                <h2 className="text-2xl font-bold">Starter</h2>
                <p className="mt-5 text-sm">Perfect for getting started</p>
                <div className="mt-10 flex gap-x-1">
                  <div className="flex">
                    <img src={naira} alt="" />
                    <p className="font-montserrat text-4xl leading-5 font-bold">
                      0
                    </p>
                  </div>
                  <p className="text-sm leading-5">per month</p>
                </div>
                <button className="bg-primary-500 mt-7 cursor-pointer px-12 lg:px-20 py-2.5 text-sm leading-5 text-white hover:bg-purple-700">
                  Start free trial
                </button>
                <div className="mt-7 space-y-4">
                  <div className="flex items-center gap-x-3">
                    <img src={checkIcon} alt="" />
                    <p>No payment</p>
                  </div>
    
                  <div className="flex items-center gap-x-3">
                    <img src={checkIcon} alt="" />
                    <p>3 free courses</p>
                  </div>
    
                  <div className="flex items-center gap-x-3">
                    <img src={checkIcon} alt="" />
                    <p>Basic access</p>
                  </div>
    
                  <div className="flex items-center gap-x-3">
                    <img src={checkIcon} alt="" />
                    <p>Join student community forum</p>
                  </div>
    
                  <div className="flex items-center gap-x-3">
                    <img src={checkIcon} alt="" />
                    <p>Progress tracking dashboard</p>
                  </div>
                </div>
              </div>
              {/* Learner Plan */}
              <div className="flex flex-col rounded-2xl bg-white py-14 px-10 lg:py-16">
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
                <button className="bg-primary-500 mt-7 cursor-pointer px-12 lg:px-20 py-2.5 text-sm leading-5 text-white hover:bg-purple-700">
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
              </div>
    
            {/* Educator Plan */}
              <div className="flex flex-col rounded-2xl bg-white py-14 px-10 lg:py-16 md:col-span-2 md:max-w-md md:mx-auto lg:col-span-1 lg:max-w-none">
                <h2 className="text-2xl font-bold">Educator</h2>
                <p className="mt-5 text-sm">
                  For educators ready to teach and earn
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
                <button className="bg-primary-500 mt-7 cursor-pointer px-12 lg:px-20 py-2.5 text-sm leading-5 text-white hover:bg-purple-700">
                  Start Teaching Today
                </button>
                <div className="mt-7 space-y-4">
                  <div className="flex items-center gap-x-3">
                    <img src={checkIcon} alt="" />
                    <p>Course creation tools</p>
                  </div>
    
                  <div className="flex items-center gap-x-3">
                    <img src={checkIcon} alt=""></img>
                    <p>Unlimited course publishing</p>
                  </div>
    
                  <div className="flex items-center gap-x-3">
                    <img src={checkIcon} alt=""></img>
                    <p>Access to earnings dashboard</p>
                  </div>
    
                  <div className="flex items-center gap-x-3">
                    <img src={checkIcon} alt=""></img>
                    <p>Learner analytics & progress tracking</p>
                  </div>
    
                  <div className="flex items-center gap-x-3">
                    <img src={checkIcon} alt=""></img>
                    <p>Payouts and monetization tools</p>
                  </div>
    
                  <div className="flex items-center gap-x-3">
                    <img src={checkIcon} alt=""></img>
                    <p>Priority educator support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default PaymentSection
