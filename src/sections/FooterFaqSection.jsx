import React from 'react'
import {blackMaleImg, femaleImg, maleImg} from '../components/details';
import Button from '@/components/UI/Button';

const FooterFaqSection = () => {
  return (
    <div className="container bg-[#6d28d2] px-6 py-8 lg:px-10 lg:py-12">
           <div className="m-auto flex flex-col-reverse lg:flex-row w-[95%] lg:w-[80%] items-center justify-between">
             <div className="w-full lg:w-1/2 py-10 md:text-center lg:text-left">
               <h2 className="mb-3 lg:mb-5 text-2xl md:text-[52px] font-bold text-white">
                 Start your learning journey today
               </h2>
               <p className="text-[14px] md:text-2xl font-medium text-white">
                 Whether you are here to grow or to guide others Learnverrse is
                 built for you.
               </p>
   
               <div className="mt-8 flex flex-col items-center w-full md:w-auto space-y-5 md:flex-row md:space-y-0 md:space-x-5">
                 <button className="hover:text-primary-800 cursor-pointer rounded-2xl bg-white px-27 lg:px-6 py-3 font-semibold">
                   Start Learning
                 </button>
                 <button className="hover:text-primary-800 cursor-pointer rounded-2xl border border-white px-20 lg:px-6 py-3 font-semibold text-white hover:bg-white ">
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
  )
}

export default FooterFaqSection