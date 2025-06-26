import React from 'react'
import { FaSearch, FaStar, FaRegClock } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

const CourseCard = ({course}) => {
  const navigate = useNavigate();

  return (
    <div
        onClick={() => navigate('/learner-dashboard/learning-page')}
        className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg"
    >
        {/* course images */}
        <div className="h-48">
            <img
            src={course.src}
            alt={course.title}
            className="h-full w-full object-cover"
            />
            </div>
        
        {/* content */}
        <div className="p-5">
            <div className="flex flex-col justify-between md:flex-row">
                <h3 className="text-lg font-semibold text-gray-900">
                    {course.title}
                </h3>
                <span className="self-start rounded-full bg-purple-400 px-2 py-1 text-xs font-medium text-white">
                    {course.badge}
                </span>
            </div>
        </div>
    
        <div className="mb-3 flex items-center gap-4 pl-5">
            <div className="flex items-center gap-2">
                <FaStar className="h-4 w-4 text-yellow-400" />
                <span>{course.rating}</span>
            </div>
            <div className="flex items-center gap-2">
                <FaRegClock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">
                    {course.duration}
                </span>
            </div>
        </div>
    
        <p className="p-5">{course.description}</p>
    
        <button className="flex items-center gap-2 p-5 text-sm font-medium text-purple-600 transition-colors hover:text-purple-700">
            Learn more
            <FaArrowRight className="h-4 w-4" />
        </button>
    </div>
  )
}

export default CourseCard