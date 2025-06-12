import React from 'react';
import { FaSearch, FaStar, FaRegClock } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router';


const StudentCourses = () => {
  const navigate = useNavigate();
  const courses = [
    {
      id: 1,
      title: 'Introduction To Product Design',
      rating: 4.3,
      duration: '5 hr',
      description:
        'Our team would will work closely with you to understand your strengths and experiences.',
      badge: 'Learnverrse',
      src: '/learnverrse/src/assets/student-courses-images/image234.png',
    },
    {
      id: 2,
      title: 'Product Management Essentials',
      rating: 4.3,
      duration: '5 hr',
      description:
        'Our team would will work closely with you to understand your strengths and experiences.',
      badge: 'Educator',
      src: '/learnverrse/src/assets/student-courses-images/176744.jpg',
    },
    {
      id: 3,
      title: 'Advanced Product Management',
      rating: 4.3,
      duration: '5 hr',
      description:
        'Our team would will work closely with you to understand your strengths and experiences.',
      badge: 'Educator',
      src: '/learnverrse/src/assets/student-courses-images/2149.jpg',
    },
    {
      id: 4,
      title: 'Product Management Fundamentals',
      rating: 4.3,
      duration: '5 hr',
      description:
        'Our team would will work closely with you to understand your strengths and experiences.',
      badge: 'Learnverrse',
      src: '/learnverrse/src/assets/student-courses-images/2213.jpg',
    },
  ];

  return (
    <div>
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

      <div className="px-8 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => navigate('/learning-page')}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCourses;
