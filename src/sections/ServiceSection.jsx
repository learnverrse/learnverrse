import React from 'react'
import {  } from '../components/details';
import { LiaBookSolid } from 'react-icons/lia';
import { GoVideo } from 'react-icons/go';
import { FaFileAlt } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { TbCertificate } from 'react-icons/tb';
import { MdOutlineAssessment } from 'react-icons/md';

const ServiceSection = () => {
  return (
    <div className="bg-radial-bottom-left container flex flex-col items-center justify-center py-10">
            <div className="flex w-[75%] flex-col items-center justify-center text-center">
              <h2 className="mb-7 text-2xl lg:text-5xl font-medium text-[#121212]">
                Empowering Digital Learning at Every Level
              </h2>
              <p className="text-base md:text-2xl">
                Learnverrse combines modern technology with intuitive tools to make
                online education seamless for both students and administrators.
                Explore our key feature.
              </p>
            </div>
            <div className="m-auto mt-8 w-[90%] rounded-[30px] bg-white px-12 py-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
                <div className="rounded-4xl border border-[#6D28D2] py-3 text-center">
                  <div className="mb-3 flex items-center justify-center">
                    <LiaBookSolid className="rounded-full bg-[#6d28d2] p-6 text-2xl text-white" />
                  </div>
                  <h3 className="mb-2 text-base font-medium">Course Management</h3>
                  <p className="m-auto w-[80%] text-sm">
                    Create, edit, and organize your learning content with ease.
                    Perfect for building structured course modules.
                  </p>
                </div>
    
                <div className="rounded-4xl border border-[#6D28D2] py-3 text-center">
                  <div className="mb-3 flex items-center justify-center">
                    <GoVideo className="rounded-full bg-[#6d28d2] p-6 text-2xl text-white" />
                  </div>
                  <h3 className="mb-2 font-medium">Content Delivery</h3>
                  <p className="m-auto w-[80%] text-sm">
                    Seamlessly upload videos, PDFs, quizzes and interactive elements
                    to engage learners of all styles.
                  </p>
                </div>
    
                <div className="rounded-4xl border border-[#6D28D2] py-3 text-center">
                  <div className="mb-3 flex items-center justify-center">
                    <FaFileAlt className="rounded-full bg-[#6d28d2] p-6 text-2xl text-white" />
                  </div>
                  <h3 className="mb-2 font-medium">Assessment Tools</h3>
                  <p className="m-auto w-[80%] text-sm">
                    Auto-grade quizzes and test, or manualy evaluate assignments to
                    ensure deeper learning.
                  </p>
                </div>
    
                <div className="rounded-4xl border border-[#6D28D2] py-3 text-center">
                  <div className="mb-3 flex items-center justify-center">
                    <TiMessages className="rounded-full bg-[#6d28d2] p-6 text-2xl text-white" />
                  </div>
                  <h3 className="mb-2 font-medium">Communication</h3>
                  <p className="m-auto w-[80%] text-sm">
                    Stay connected through in-app messaging and real-time push
                    notifications for reminders and updates.
                  </p>
                </div>
    
                <div className="rounded-4xl border border-[#6D28D2] py-3 text-center">
                  <div className="mb-3 flex items-center justify-center">
                    <MdOutlineAssessment className="rounded-full bg-[#6d28d2] p-6 text-2xl text-white" />
                  </div>
                  <h3 className="mb-2 font-medium">Analytics</h3>
                  <p className="m-auto w-[80%] text-sm">
                    Gain powerful insights with dashboard tailored for both students
                    and administrators. Track performance and engagement.
                  </p>
                </div>
    
                <div className="rounded-4xl border border-[#6D28D2] py-3 text-center">
                  <div className="mb-3 flex items-center justify-center">
                    <TbCertificate className="rounded-full bg-[#6d28d2] p-6 text-2xl text-white" />
                  </div>
                  <h3 className="mb-2 font-medium">Certification</h3>
                  <p className="m-auto w-[80%] text-sm">
                    Instantly generate certificates when students complete a course.
                    Verified, downloadable and sharable.
                  </p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ServiceSection