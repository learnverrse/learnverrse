import CourseEnrolledSection from '@/sections/CourseEnrolledSection';
import React from 'react';
import { FaSearch } from 'react-icons/fa';



const StudentCourses = () => {
 

  return (
    <div className="h-[calc(100vh-80px)] w-full">
      <div className="flex flex-col items-center justify-between p-8 md:flex-row">
        <div className="pb-8 md:pb-0">
          <h1 className="mb-1 text-2xl font-semibold">My Courses</h1>
          <p className="text-sm text-gray-500">What Are We Learning Today</p>
        </div>
        <div className="relative">
          <FaSearch className='h-4" absolute top-1/2 left-3 w-4 -translate-y-1/2 transform text-gray-400' />
          <input
            type="text"
            placeholder="Search Courses"
            className="w-80 rounded-full border border-gray-300 py-2.5 pr-4 pl-10 text-sm outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      <CourseEnrolledSection/>

      
    </div>
    
  );
};

export default StudentCourses;
