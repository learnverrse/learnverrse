import React from 'react'
import {dataAnalytics, cyberSecurity, uiUx,   } from '../components/details';

const ExploreSection = () => {
  return (
     <div className="container flex flex-col items-center justify-center py-10">
            <h2 className="mb-7 text-3xl font-semibold lg:text-5xl lg:font-medium text-[#121212]">
              Explore Our Courses
            </h2>
            <p className="text-lg lg:text-2xl font-medium text-[#121212]">
              Explore in demand skill courses
            </p>
            <div className="m-auto mt-8 w-full lg:w-[70%] bg-[#F0E5FF] px-14 py-14 lg:px-10 lg:py-12">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col rounded-[17px] bg-white text-center">
                  <img src={dataAnalytics} alt="" className="" />
                  <p className="px-3 py-5 text-lg font-medium text-[#121212]">
                    Data Analytics: Transforming Data into Actionable Insights
                  </p>
                </div>
    
                <div className="flex flex-col rounded-[17px] bg-white text-center">
                  <img src={cyberSecurity} alt="" />
                  <p className="py-5 text-lg font-medium text-[#121212]">
                    Cybersecurity Fundamentals: Protecting Digital Frontiers
                  </p>
                </div>
    
                <div className="flex flex-col rounded-[17px] bg-white text-center">
                  <img src={uiUx} alt="" />
                  <p className="py-5 text-lg font-medium text-[#121212]">
                    UI/UX Design Masterclass: Design with Users in Mind
                  </p>
                </div>
              </div>
              <button className="border-primary-500 text-primary-500 hover:bg-white mt-10 rounded-[15px] border px-6 py-1.5 font-semibold">
                <a href="#">Show more</a>
              </button>
            </div>
          </div>
  )
}

export default ExploreSection