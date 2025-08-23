import React from 'react';
import { FaSearch, FaStar, FaRegClock } from 'react-icons/fa';
import { FaBookOpen  } from 'react-icons/fa6';
import { FiUsers } from "react-icons/fi";
import { useNavigate } from 'react-router';
import Button from './Button';
import image234 from '@/assets/student-courses-images/image234.png';

const CourseEnrolledCard = ({ course }) => {
  const navigate = useNavigate();

  // Move normalizedProgress calculation to main component
  const normalizedProgress = Math.min(Math.max(course?.progress || 0, 0), 100);

  const handleCardClick = () => {
    // Make sure we have a course ID before navigating
    if (!course?.id && !course?._id && !course?.courseId) {
      console.error('No course ID available:', course);
      return;
    }

    // Try different possible ID field names
    const courseId = course.id || course._id || course.courseId;
    
    navigate('/learner-dashboard/learning-page', {
      state: { 
        courseId: courseId,
        course: course // Optional: pass entire course object for additional context
      }
    });
  };

  const ProgressBar = ({ progress = 0, className = '' }) => {
    const progressValue = Math.min(Math.max(progress, 0), 100);
    
    return (
      <div className={`h-1.5 flex-1 rounded-full p-6 ${className}`}>
        <div className='flex items-center justify-between pb-1'>
          <span className="text-sm text-gray-800">Progress</span>
          <h2 className="text-sm font-bold text-black">{progressValue}%</h2>
        </div>
        <div className="h-1.5 rounded-full bg-gray-200">
          <div
            className="h-1.5 rounded-full bg-purple-700 transition-all duration-300 ease-in-out"
            style={{ width: `${progressValue}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-full items-center overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg md:w-auto cursor-pointer"
    >
      {/* course images */}
      <div className="h-48">
        <img
          src={course.image || image234}
          alt={course.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* content */}
      <div className="p-5">
        <div className="flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {course.title}
          </h3>
          <span className="self-start rounded-full bg-purple-500 px-4 py-1 text-xs font-medium text-white md:text-sm">
            {course.category || 'No badge from B.E'}
          </span>
        </div>
      </div>

      <div className="mb-3 flex items-center gap-4 pl-5">
        <div className="flex items-center gap-2">
          <p>{course?.description || 'no description'}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <ProgressBar progress={course?.progress || 0} />
      </div>

      <div className="flex justify-between p-6 items-center gap-2">
        <div className='flex gap-2 items-center'>
            <FaRegClock  className="h-4 w-4 text-gray-900" />
        <span className="text-sm text-gray-900">
          {course?.duration || 'No duration'}
        </span>
        </div>
        <div className='flex gap-2 items-center'>
            <FaBookOpen className="h-4 w-4 text-gray-900" />
        <span className="text-sm text-gray-900">
          {course?.chapters || 'No duration'} Chapters
        </span>
        </div>
      </div>

      <div className='flex gap-2 items-center pl-6'>
            <FiUsers className="h-4 w-4 text-gray-900" />
        <span className="text-sm text-gray-900">
          {course?.users || 'No Users'} Students
        </span>
        </div>

      
         <div className='flex p-6'>
            <button 
              className="bg-primary-500 rounded-xl p-2 w-full text-md font-medium text-white transition-colors hover:bg-purple-700"
              onClick={(e) => {
                e.stopPropagation(); // Prevent double-click if button is clicked
                handleCardClick();
              }}
            >
         {normalizedProgress === 100 ? 'Course Completed' : normalizedProgress === 0 ? 'Start Learning' : 'Continue Learning'}
        </button>
        </div>
      
    </div>
  );
};

export default CourseEnrolledCard;