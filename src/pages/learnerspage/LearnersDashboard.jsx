import React from 'react';
import { PiCertificateFill } from 'react-icons/pi';
import { FaBookBookmark } from 'react-icons/fa6';
import { FaBookOpen } from 'react-icons/fa';
import Handwave from './../../assets/learners-page-image/handwavee.png';
import CalenderSection from '@/sections/CalenderSection';
import useAuthProvider from '@/hooks/useAuthProvider';
import { useNavigate } from 'react-router';

const LearnersDashboard = () => {
  const {
    auth: { user },
  } = useAuthProvider();

  const navigate = useNavigate(); 

  // Sample tasks data
  const tasks = [
    {
      id: 1,
      title: 'Submit Cybersecurity assignment',
      due: 'Today 11:59 PM',
      completed: false,
    },
    {
      id: 2,
      title: 'Review Cybersecurity syllabus',
      due: 'Tomorrow 4:00 PM',
      completed: false,
    },
    {
      id: 3,
      title: 'Join class live session',
      due: 'May 14 10:00 AM',
      completed: false,
    },
    {
      id: 4,
      title: 'Review tutor feedback',
      due: 'May 18 6:00 PM',
      completed: false,
    },
    {
      id: 5,
      title: 'Complete cybersecurity quiz',
      due: 'May 21 2:00 PM',
      completed: false,
    },
  ];

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-12">
      <div className="scroll-container col-span-1 h-screen flex-1 overflow-y-auto bg-gray-50 p-6 md:col-span-9 lg:col-span-9">
        {/* Welcome Section */}
        <section className="mb-8">
          <div className="flex">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
                Welcome Back {user?.name}
              </h1>
              <p className="text-gray-500">Here's what's happening today</p>
            </div>
            <div className="ml-2.5">
              <img
                src={Handwave}
                alt="Waving hand"
                className="h-[50px] w-[50px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* Current Course Section */}
        <section className="mb-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className='mb-4 flex items-center justify-between'>
            <div className="inline-flex self-start rounded-lg border-2 border-purple-300 bg-purple-100 p-2 sm:p-3">
              <FaBookOpen className="h-8 w-8 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
            </div>
            <h2 className="mb-4 text-xs font-bold md:text-sm bg-purple-300 p-2 rounded-full text-black">
              Current Course
            </h2>
          </div>

          <div className="mb-4 flex justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Cybersecurity Fundamentals: Protecting Digital Frontiers
              </h3>
              <p className="flex items-center font-bold text-gray-600">
                Tutor: David Banner
              </p>
            </div>
          </div>

          <div className="mb-4">
            
            <div className="flex items-center gap-2">
              <div className="h-1.5 flex-1 rounded-full bg-gray-200">
                <div
                  className="h-1.5 rounded-full bg-green-600"
                  style={{ width: '50%' }}
                ></div>
              </div>
              <h2 className="text-sm font-bold text-black">50%</h2>
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <div className="mb-8 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          <div className="relative rounded-xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4 md:p-6">
            <div className="flex h-full flex-col sm:flex-row sm:items-center">
              <div className="absolute top-2 right-2 rounded-lg border-2 border-purple-300 bg-purple-100 p-2 sm:top-2 sm:right-4 sm:p-3">
                <FaBookOpen className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
              </div>
              <div className="flex h-full flex-col justify-between">
                <h2 className="text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
                  1
                </h2>
                <p className="mt-auto text-xs text-gray-500 sm:text-sm md:text-base">
                  Courses Enrolled
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4 md:p-6">
            <div className="flex h-full flex-col sm:flex-row sm:items-center">
              <div className="absolute top-2 right-2 rounded-lg border-2 border-purple-300 bg-purple-100 p-2 sm:top-2 sm:right-4 sm:p-3">
                <FaBookBookmark className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
              </div>
              <div className="flex h-full flex-col justify-between">
                <h2 className="text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
                  0
                </h2>
                <p className="mt-auto text-xs text-gray-500 sm:text-sm md:text-base">
                  Courses Completed
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4 md:p-6">
            <div className="flex h-full flex-col sm:flex-row sm:items-center">
              <div className="absolute top-2 right-2 rounded-lg border-2 border-purple-300 bg-purple-100 p-2 sm:top-2 sm:right-4 sm:p-3">
                <PiCertificateFill className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
              </div>
              <div className="flex h-full flex-col justify-between">
                <h2 className="text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
                  0
                </h2>
                <p className="mt-auto text-xs text-gray-500 sm:text-sm md:text-base">
                  Certificates
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Start Course */}
        <div className="mb-8">
          <button className="w-full rounded-md bg-purple-700 px-6 py-2 text-white hover:bg-purple-600 md:w-auto" onClick={() => navigate('/courses')}>
            Start New Course
          </button>
        </div>

        {/* Tasks Section */}
        <section className="mb-8 rounded-xl border border-gray-100 bg-white p-4 shadow-sm md:p-6">
          <h2 className="mb-4 text-lg font-bold text-gray-800 md:text-xl">
            Tasks
          </h2>

          <div className="space-y-3 md:space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex flex-col items-center justify-between border-b border-gray-100 py-2 last:border-b-0 md:flex-row"
              >
                <div className="min-w-0 flex-1">
                  <h3
                    className={`truncate text-sm font-medium md:text-base ${
                      task.completed
                        ? 'text-gray-400 line-through'
                        : 'text-gray-800'
                    }`}
                  >
                    {task.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 md:text-sm">
                    {task.due}
                  </p>
                </div>
                <button className="mt-4 rounded-full border-2 border-gray-300 px-6 text-center text-black hover:bg-gray-200 md:mt-0">
                  View
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Calendar column - only shows on md+ screens */}
      <div className="hidden h-screen md:col-span-3 md:block lg:col-span-3">
        <div className="h-full overflow-y-auto p-4">
          <CalenderSection />
        </div>
      </div>
    </div>
  );
};

export default LearnersDashboard;
