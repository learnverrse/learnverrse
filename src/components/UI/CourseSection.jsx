import React, { useState } from 'react';
import CourseCard from './CourseCard';
import image234 from '@/assets/student-courses-images/image234.png';
import image176744 from '@/assets/student-courses-images/176744.jpg';
import image2149 from '@/assets/student-courses-images/2149.jpg';
import image2213 from '@/assets/student-courses-images/2213.jpg';
import { axiosInstance } from '@/apis/axios';
import { useQuery } from '@tanstack/react-query';
import Loader from './Loader';
import { MdError } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";


const CoursesSection = ({ limitCourses }) => {
  async function fetchCourses() {
    const response = await axiosInstance.get(
      import.meta.env.VITE_GET_ALL_COURSES
    );
    console.log('Fetched courses:', response.data.data);
    return response.data.data;
  }

  const { data, isLoading, error, refetch } = useQuery(
    ['courses'],
    fetchCourses
  );

  if (isLoading) return <Loader isLoading={isLoading} />;
  if (error)
    return (
      <div className='flex items-center justify-center p-4'>
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md items-center flex flex-col">
                      <div className=" mb-4"><MdError className='text-primary-500 text-7xl' /></div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2"> Course Not Found  </h2>
                      <p className="text-gray-600 mb-6">
                        Courses are currently not available, please check back
                      </p>
                      <button 
                        onClick={() => refetch()}
                        className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center mx-auto"
                      >
                        Reload
                      </button>
                    </div>
      </div>
    );

  // Limit courses if specified
  const displayedCourses = limitCourses ? data.slice(0, limitCourses) : data;

  return (
    <div className="w-full">
      {/* Courses Grid */}
      <div className="px-8 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {displayedCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
