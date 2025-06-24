import React from 'react'
import {chevronRight, faqHuman} from '../components/details';

const FaqSection = () => {
  return (
    <div className="container flex flex-col items-center justify-center py-10">
            <h2 className="mb-4 text-2xl lg:text-[40px] font-bold text-[#121212]">
              Frequently Asked Questions
            </h2>
            <p className="text-base lg:text-2xl">What questions do you need answered?</p>
    
            <div className="m-auto mt-8 flex w-[90%] lg:w-[70%] flex-col-reverse items-center gap-y-6 md:gap-y-0 justify-between lg:px-4 md:flex-row md:p-6">
              <div className="flex flex-col w-[90%] lg:w-[50%] space-y-5">
                <div className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 lg:px-10 lg:py-3 hover:bg-purple-200">
                  <p className='text-[14px]'>What is Learnverrse</p>
                  <img src={chevronRight} alt="" className='hidden md:block' />
                </div>
    
                <div className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 lg:px-10 lg:py-3 hover:bg-purple-200">
                  <p className='text-[14px]'>How do I sign up</p>
                  <img src={chevronRight} alt="" className='hidden md:block' />
                </div>
    
                <div className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 lg:px-10 lg:py-3 hover:bg-purple-200">
                  <p className='text-[14px]'>What payment methods are accepted</p>
                  <img src={chevronRight} alt="" className='hidden md:block' />
                </div>
    
                <div className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 lg:px-10 lg:py-3 hover:bg-purple-200">
                  <p className='text-[14px]'>Can I cancel my subscriptions at anytime</p>
                  <img src={chevronRight} alt="" className='hidden md:block' />
                </div>
    
                <div className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 lg:px-10 lg:py-3 hover:bg-purple-200">
                  <p className='text-[14px]'>How do I get paid as an educator</p>
                  <img src={chevronRight} alt="" className='hidden md:block' />
                </div>
              </div>
    
              <div className="w-[60%] lg:w-[30%]">
                <img src={faqHuman} alt="" className=''/>
              </div>
            </div>
          </div>
  )
}

export default FaqSection