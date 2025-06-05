import React from 'react'
import { FaSearch, FaStar, FaRegClock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";



const StudentCourses = () => {

    const courses = [
    {
      id: 1,
      title: "Introduction To Product Design",
      rating: 4.3,
      duration: "5 hr",
      description: "Our team would will work closely with you to understand your strengths and experiences.",
      badge: "Learnverrse",
      src: '/learnverrse/src/assets/student-courses-images/image234.png',
    },
    {
      id: 2,
      title: "Product Management Essentials",
      rating: 4.3,
      duration: "5 hr",
      description: "Our team would will work closely with you to understand your strengths and experiences.",
      badge: "Educator",
      src: '/learnverrse/src/assets/student-courses-images/176744.jpg',
    },
    {
      id: 3,
      title: "Advanced Product Management",
      rating: 4.3,
      duration: "5 hr",
      description: "Our team would will work closely with you to understand your strengths and experiences.",
      badge: "Educator",
      src: '/learnverrse/src/assets/student-courses-images/2149.jpg',
    },
    {
      id: 4,
      title: "Product Management Fundamentals",
      rating: 4.3,
      duration: "5 hr",
      description: "Our team would will work closely with you to understand your strengths and experiences.",
      badge: "Learnverrse",
      src: '/learnverrse/src/assets/student-courses-images/2213.jpg',
    }
  ];


  return (
    <div>

        <div className='flex flex-col md:flex-row justify-between items-center p-8 '>
            <div className='pb-8 md:pb-0'>
                <h1 className='text-2xl font-semibold mb-1'>My Courses</h1>
                <p className='text-gray-500 text-sm'>What Are We Learning Today</p>
            </div>
            <div className='relative'>
                <FaSearch  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"'/>
                <input type="text"  placeholder='Search Courses' className='w-80 pl-10 pr-4 py-2.5 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-sm'/>
            </div>
        </div>

        <div className='px-8 pb-8'>
            <div className='grid md:grid-cols-2 gap-4'>
               {courses.map((course) => (
                <div key={course.id} className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow'>

                    {/* course images */}

                    <div className='h-48'>
                        <img src={course.src} alt={course.title} className='w-full h-full object-cover'/>
                    </div>

                    {/* content */}

                    <div className='p-5'>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <h3 className='text-lg font-semibold text-gray-900 '>{course.title}</h3>
                            <span className='px-2 py-1 rounded-full text-xs font-medium bg-purple-400 text-white'>{course.badge}</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-4 mb-3 pl-5'>
                        <div className='flex items-center gap-2'>
                            <FaStar className='w-4 h-4  text-yellow-400'/>
                            <span>{course.rating}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaRegClock className='w-4 h-4 text-gray-400'/>
                            <span className='text-sm text-gray-400'>{course.duration}</span>
                        </div>
                    </div>

                    <p className='p-5 '>{course.description}</p>

                    <button className="text-purple-600 font-medium flex items-center gap-2 hover:text-purple-700 transition-colors text-sm p-5">
                  Learn more
                  <FaArrowRight className="w-4 h-4" />
                </button>
                </div>
               ))}
            </div>
        </div>

    </div>
  )
}

export default StudentCourses