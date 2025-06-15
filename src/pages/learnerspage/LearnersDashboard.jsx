import React from 'react';
import { PiCertificateFill } from 'react-icons/pi';
import { FaBookBookmark } from 'react-icons/fa6';
import { FaBookOpen } from 'react-icons/fa';
import Handwave from './../../assets/learners-page-image/handwavee.png';
import CalenderSection from '@/sections/CalenderSection';

const LearnersDashboard = () => {
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
    <div className="w-full md:grid md:grid-cols-12">
      <div className="scroll-container col-span-8 h-screen flex-1 overflow-y-auto bg-gray-50 p-2 lg:col-span-9 lg:p-6">
        {/* Welcome Section */}
        <section className="mb-8">
          <div className="flex">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
                Welcome Back Kevin
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

        {/* Stats Cards */}
        <div className="mb-8 grid grid-cols-3 gap-6">
          <div className="relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center">
              <div className="absolute top-2 right-0 mr-4 rounded-lg border-2 border-purple-300 bg-purple-100 p-3">
                <FaBookOpen size={24} />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-800">1</h2>
                <p className="text-gray-500">Courses Enrolled</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center">
              <div className="absolute top-2 right-0 mr-4 rounded-lg border-2 border-purple-300 bg-purple-100 p-3">
                <FaBookBookmark size={24} />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-800">0</h2>
                <p className="text-gray-500">Courses Completed</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center">
              <div className="absolute top-2 right-0 mr-4 rounded-lg border-2 border-purple-300 bg-purple-100 p-3">
                <PiCertificateFill size={28} />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-800">0</h2>
                <p className="text-gray-500">Certificates</p>
              </div>
            </div>
          </div>
        </div>
        {/* Start Course */}

        <div className="mb-8">
          <button className="rounded-md bg-purple-700 px-6 py-2 text-white hover:bg-purple-600">
            Start New Course
          </button>
        </div>

        {/* Current Course Section */}
        <section className="mb-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">In Progress</h2>
          </div>

          <div className="mb-4 flex justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Cybersecurity Fundamentals: Protecting Digital Frontiers
              </h3>
              <p className="flex items-center text-gray-600">
                Tutor: David Banner
              </p>
            </div>
            <div className="flex items-center bg-gray-100 px-3 shadow-md">
              <span>50%</span>
            </div>
          </div>

          <div className="mb-4">
            <div className="mb-1 flex justify-between text-sm text-gray-500">
              <span>Progress</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-200">
              <div
                className="h-1.5 rounded-full bg-green-600"
                style={{ width: '50%' }}
              ></div>
            </div>
          </div>

          <p className="text-gray-500">80+ other students enrolled</p>
        </section>

        {/* Tasks Section */}
        <section className="mb-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Tasks</h2>
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex flex-col items-center justify-between rounded-lg p-3 hover:bg-gray-50 md:flex-row"
              >
                <div className="flex flex-col">
                  <span
                    className={
                      task.completed
                        ? 'text-gray-400 line-through'
                        : 'text-gray-700'
                    }
                  >
                    {task.title}
                  </span>
                  <span className="mt-2 text-sm text-gray-500">{task.due}</span>
                </div>
                <button className="mt-4 rounded-full border-2 border-gray-300 px-4 text-black hover:bg-gray-200 md:mt-0">
                  View
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* calander column */}
      <div className="col-span-4 h-screen lg:col-span-3">
        <div className="h-full overflow-y-auto p-4">
          <CalenderSection />
        </div>
      </div>
    </div>
  );
};

export default LearnersDashboard;
