import React from 'react';
import { PiCertificateFill} from 'react-icons/pi';
import { FaBookBookmark } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import Handwave from "./../../assets/learners-page-image/handwavee.png"



const LearnersDashboard = () => {
  // Sample tasks data
  const tasks = [
    { id: 1, title: "Submit Cybersecurity assignment", due: "Today 11:59 PM", completed: false },
    { id: 2, title: "Review Cybersecurity syllabus", due: "Tomorrow 4:00 PM", completed: false },
    { id: 3, title: "Join class live session", due: "May 14 10:00 AM", completed: false },
    { id: 4, title: "Review tutor feedback", due: "May 18 6:00 PM", completed: false },
    { id: 5, title: "Complete cybersecurity quiz", due: "May 21 2:00 PM", completed: false },
  ];

  return (
    <div className="flex-1 h-screen overflow-y-auto p-6 bg-gray-50 scroll-container">
      {/* Welcome Section */}
      <section className="mb-8">
        <div className='flex'>
          <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome Back Kevin</h1>
          <p className="text-gray-500">Here's what's happening today</p>
        </div>
        <div className='ml-2.5'>
          <img 
            src={Handwave} 
            alt="Waving hand" 
            className="w-[50px] h-[50px] object-contain"
          />
        </div>
        </div>
        
        
      </section>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="absolute top-2 right-0 p-3 rounded-lg bg-purple-100 border-2 border-purple-300  mr-4">
              <FaBookOpen  size={24}  />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800">1</h2>
              <p className="text-gray-500">Courses Enrolled</p>
            </div>
          </div>
        </div>

        <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="absolute top-2 right-0 p-3 rounded-lg bg-purple-100 border-2 border-purple-300 mr-4">
              <FaBookBookmark size={24} />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800">0</h2>
              <p className="text-gray-500">Courses Completed</p>
            </div>
          </div>
        </div>

        <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="absolute top-2 right-0 p-3 rounded-lg bg-purple-100 border-2 border-purple-300 mr-4">
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

      <div className='mb-8'>
        <button className='bg-purple-700 px-6 py-2 rounded-md hover:bg-purple-600 text-white'>Start New Course</button>
      </div>

      {/* Current Course Section */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">In Progress</h2>
        </div>

        <div className="mb-4 flex justify-between">
          <div>
          <h3 className="text-lg font-semibold text-gray-800">Cybersecurity Fundamentals: Protecting Digital Frontiers</h3>
          <p className="text-gray-600 flex items-center">Tutor: David Banner</p>
          </div>
          <div className='bg-gray-100 px-3 flex items-center shadow-md'>
            <span>50%</span>
          </div>
          
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>Progress</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-green-600 h-1.5 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>
        
        <p className="text-gray-500">80+ other students enrolled</p>
      </section>

      {/* Tasks Section */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Tasks</h2>
        <ul className="space-y-4">
          {tasks.map(task => (
            <li key={task.id} className="flex flex-col md:flex-row justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
              <div className="flex flex-col ">
                <span className={task.completed ? "line-through text-gray-400" : "text-gray-700"}>
                  {task.title}
                </span>
                <span className="text-sm text-gray-500 mt-2">{task.due}</span>
              </div>
              <button className='border-2 border-gray-300 hover:bg-gray-200 text-black px-4 mt-4 md:mt-0 rounded-full'>View</button>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
};

export default LearnersDashboard;