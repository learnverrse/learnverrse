import React from 'react';
import { FaSearch, FaStar, FaRegClock } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
import Button from './Button';
import image234 from '@/assets/student-courses-images/image234.png';
import Naira from '../utils/Naira';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/coursedetails/${course._id}`)}
      className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg md:w-auto"
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
        <div className="flex flex-col justify-between md:flex-row">
          <h3 className="text-lg font-semibold text-gray-900">
            {course.title}
          </h3>
          <span className="self-start rounded-full bg-purple-400 px-4 py-1 text-xs font-medium text-white md:text-sm">
            {course.badge || 'No badge from B.E'}
          </span>
        </div>
      </div>

      <div className="mb-3 flex items-center gap-4 pl-5">
        <div className="flex items-center gap-2">
          <FaStar className="h-4 w-4 text-yellow-400" />
          <span>{course?.averageRating || 'no rating'}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegClock className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-400">
            {course?.duration || 'No duration'}
          </span>
        </div>
      </div>

      <p className="p-5">{course.description}</p>

      <div className="flex items-center justify-between p-5 max-sm:flex-wrap">
        <button className="bg-primary-300 flex gap-2 rounded-full p-2 px-10 text-sm font-medium text-black transition-colors hover:text-purple-700">
          Enroll Now
        </button>
        <h3 className="text-lg font-bold text-black md:text-xl">
          <Naira amount={course.price} />
        </h3>
      </div>
    </div>
  );
};

export default CourseCard;
