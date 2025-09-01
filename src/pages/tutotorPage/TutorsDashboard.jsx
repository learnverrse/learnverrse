import React from 'react';
import { PiNotePencilBold } from 'react-icons/pi';
import { FaGraduationCap } from 'react-icons/fa6';
import { FaBook } from 'react-icons/fa';
import Handwave from './../../assets/learners-page-image/handwavee.png';
import CalenderSection from '@/sections/CalenderSection';
import useAuthProvider from '@/hooks/useAuthProvider';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import Loader from '@/components/UI/Loader';

const TutorsDashboard = () => {
  const {
    auth: { user },
  } = useAuthProvider();

  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  // Fetch courses data for dashboard statistics
  const fetchCoursesData = async () => {
    try {
      const response = await axiosPrivate.get(
        `courses/educator?ownCoursesOnly=true`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return { data: [], totalCourses: 0 };
    }
  };

  const { data: coursesData, isLoading } = useQuery(
    ['dashboardCourses'],
    fetchCoursesData
  );

  // Calculate dynamic statistics
  const totalCourses = coursesData?.totalCourses || 0;
  const totalStudents = coursesData?.data?.reduce((sum, course) => {
    return sum + (course.enrolledStudents || course.studentsEnrolled || 0);
  }, 0) || 0;
  
  // Get recent enrollments (you might need to adjust this based on your data structure)
  const recentEnrollment = coursesData?.data?.reduce((sum, course) => {
    // Assuming you have a recentEnrollments field or calculate based on recent data
    return sum + (course.recentEnrollments || 0);
  }, 0) || 0;

  // Filter published/active courses for display
  const activeCourses = coursesData?.data?.filter(course => 
    course.status === 'published' || course.status === 'active'
  ) || [];

  // Tasks data (you might want to fetch this dynamically too)
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

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader isLoading={isLoading} info={'Loading dashboard...'} />
      </div>
    );
  }

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

        {/* Stats Cards */}
        <div className="mb-8 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          <div className="relative rounded-xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4 md:p-6">
            <div className="flex h-full flex-col sm:flex-row sm:items-center">
              <div className="absolute top-2 right-2 rounded-lg border-2 border-purple-300 bg-purple-100 p-2 sm:top-2 sm:right-4 sm:p-3">
                <FaGraduationCap className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
              </div>
              <div className="flex h-full flex-col justify-between">
                <h2 className="text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
                  {totalStudents}
                </h2>
                <p className="mt-auto text-xs text-gray-500 sm:text-sm md:text-base">
                  Total Students
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4 md:p-6">
            <div className="flex h-full flex-col sm:flex-row sm:items-center">
              <div className="absolute top-2 right-2 rounded-lg border-2 border-purple-300 bg-purple-100 p-2 sm:top-2 sm:right-4 sm:p-3">
                <FaBook className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
              </div>
              <div className="flex h-full flex-col justify-between">
                <h2 className="text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
                  {totalCourses}
                </h2>
                <p className="mt-auto text-xs text-gray-500 sm:text-sm md:text-base">
                  Total Courses
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4 md:p-6">
            <div className="flex h-full flex-col sm:flex-row sm:items-center">
              <div className="absolute top-2 right-2 rounded-lg border-2 border-purple-300 bg-purple-100 p-2 sm:top-2 sm:right-4 sm:p-3">
                <PiNotePencilBold className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
              </div>
              <div className="flex h-full flex-col justify-between">
                <h2 className="text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
                  {recentEnrollment}
                </h2>
                <p className="mt-auto text-xs text-gray-500 sm:text-sm md:text-base">
                  Recent Enrollment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Start Course */}
        <div className="mb-8">
          <button
            className="w-full rounded-md bg-purple-700 px-6 py-2 text-white hover:bg-purple-600 md:w-auto"
            onClick={() => navigate('/educator/my-courses')}
          >
            Manage Courses
          </button>
        </div>

        {/* My Courses Section */}
        <section className="mb-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">My Courses</h2>
          </div>

          {activeCourses.length > 0 ? (
            <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
              {activeCourses.slice(0, 6).map((course) => (
                <div
                  key={course._id}
                  className="w-full shrink-0 snap-center rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md sm:min-w-[300px] md:min-w-0"
                >
                  <h3 className="mb-3 text-sm leading-tight font-semibold text-gray-800 md:text-base">
                    {course.title || course.name}
                  </h3>
                  <div className="space-y-2 text-xs text-gray-600 md:text-sm">
                    <div className="flex items-center justify-between">
                      <span>Status:</span>
                      <span className="font-medium text-green-600 capitalize">
                        {course.status === 'published' ? 'Active' : course.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Course Rating:</span>
                      <span className="font-medium">
                        {course.rating || course.averageRating || 'N/A'}/5.0
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Enrolled Learners:</span>
                      <span className="font-medium">
                        {course.enrolledStudents || course.studentsEnrolled || 0}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-32 items-center justify-center">
              <p className="text-gray-500">No active courses yet</p>
            </div>
          )}
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

      {/* Calendar column - only shows on md+ screens */}
      <div className="hidden h-screen md:col-span-3 md:block lg:col-span-3">
        <div className="h-full overflow-y-auto p-4">
          <CalenderSection />
        </div>
      </div>
    </div>
  );
};

export default TutorsDashboard;