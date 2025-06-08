import React from 'react';
import { PiNotePencilBold } from 'react-icons/pi';
import { FaGraduationCap } from 'react-icons/fa6';
import { FaBook } from 'react-icons/fa';
import Handwave from './../../assets/learners-page-image/handwavee.png';
import CalenderSection from '@/sections/CalenderSection';
import useAuthProvider from '@/hooks/useAuthProvider';

const TutorsDashboard = () => {
  const {
    auth: { user },
  } = useAuthProvider();

  // Course data objects
  const courses = [
    {
      id: 1,
      title: 'Data Analytics: Transforming Data into Actionable Insights',
      status: 'Active',
      rating: 4.6,
      maxRating: 5.0,
      enrolledLearners: 500,
    },
    {
      id: 2,
      title: 'Cybersecurity Fundamentals: Protecting Digital Frontiers',
      status: 'Active',
      rating: 4.0,
      maxRating: 5.0,
      enrolledLearners: 300,
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass: Design with Users in Mind',
      status: 'Active',
      rating: 4.3,
      maxRating: 5.0,
      enrolledLearners: 500,
    },
  ];

  // Tasks data
  const tasks = [
    {
      id: 1,
      title: 'Grade UI/UX Design Assignment',
      dueDate: 'Today 11:59 PM',
      action: 'Grade',
    },
    {
      id: 2,
      title: 'Review Quiz Submissions',
      dueDate: 'Tomorrow 2:00 PM',
      action: 'View',
    },
    {
      id: 3,
      title: 'Schedule Live Session',
      dueDate: 'May 10, 3:00 PM',
      action: 'Schedule',
    },
    {
      id: 4,
      title: 'Update Course Materials',
      dueDate: 'May 13, 11:59 PM',
      action: 'Upload',
    },
    {
      id: 5,
      title: 'Set examination date',
      dueDate: 'May 15',
      action: 'Schedule',
    },
  ];

  return (
    <div className="grid w-full grid-cols-12">
      <div className="scroll-container col-span-9 h-screen flex-1 overflow-y-auto bg-gray-50 p-6">
        {/* Welcome Section */}
        <section className="mb-8">
          <div className="flex">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
                Welcome Back {user.firstName + ' ' + user.lastName}
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
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center">
              <div className="absolute top-2 right-0 mr-4 rounded-lg border-2 border-purple-300 bg-purple-100 p-3">
                <FaGraduationCap size={24} />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-800">1300</h2>
                <p className="text-gray-500">Total Students</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center">
              <div className="absolute top-2 right-0 mr-4 rounded-lg border-2 border-purple-300 bg-purple-100 p-3">
                <FaBook size={24} />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-800">3</h2>
                <p className="text-gray-500"> Total Courses </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center">
              <div className="absolute top-2 right-0 mr-4 rounded-lg border-2 border-purple-300 bg-purple-100 p-3">
                <PiNotePencilBold size={28} />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-800">30</h2>
                <p className="text-gray-500">Recent Enrollment</p>
              </div>
            </div>
          </div>
        </div>
        {/* Start Course */}

        <div className="mb-8">
          <button className="rounded-md bg-purple-700 px-6 py-2 text-white hover:bg-purple-600">
            Manage Courses
          </button>
        </div>

        {/* My Courses Section */}
        <section className="mb-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">My Courses</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.id}
                className="rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-3 text-sm leading-tight font-semibold text-gray-800 md:text-base">
                  {course.title}
                </h3>
                <div className="space-y-2 text-xs text-gray-600 md:text-sm">
                  <div className="flex items-center justify-between">
                    <span>Status:</span>
                    <span className="font-medium text-green-600">
                      {course.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Course Rating:</span>
                    <span className="font-medium">
                      {course.rating}/{course.maxRating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Enrolled Learners:</span>
                    <span className="font-medium">
                      {course.enrolledLearners}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly Interaction And Task Section */}
        <section className="mb-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          {/* Tasks Section */}
          <section className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm md:p-6">
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
                    <h3 className="truncate text-sm font-medium text-gray-800 md:text-base">
                      {task.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500 md:text-sm">
                      {task.dueDate}
                    </p>
                  </div>
                  <button className="mt-4 rounded-full border-2 border-gray-300 px-6 text-center text-black hover:bg-gray-200 md:mt-0">
                    {task.action}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>

      {/* calander column */}
      <div className="scroll-container col-span-3 overflow-y-auto">
        <CalenderSection />
      </div>
    </div>
  );
};

export default TutorsDashboard;
