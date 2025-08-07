import React, { useState, useEffect } from "react";
import HeaderNav from "@/components/UI/HeaderNav";
import Footer from "@/components/UI/footer";
import Loader from "@/components/UI/Loader";
import { ChevronDown, ChevronUp, Clock, FileText, Award, Smartphone, Download, Infinity } from "lucide-react";
import { CourseHolder } from "@/components/details";
import { useNavigate } from 'react-router';



const CourseDetailPage = () => {

  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [expandedModules, setExpandedModules] = useState({});

  // Simulate data fetching
  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      setLoading(false);
    };
    fetchData();
  }, []);

  const course = {
    title: "Product Design: UI and UX Basics",
    quote: "It's not just about how a product looks—it's about how it behaves, how it feels in motion, and how it supports the user without getting in the way.",
    instructor: {
      name: "Teee",
      title: "Senior Product designer",
      avatar: "/api/placeholder/60/60"
    },
    rating: "4.3",
    ratingCount: 135,
    studentCount: "1,352",
    price: "₦10,000.00",
    status: "Free trial",
    courseImage:  CourseHolder ,
    learnings: [
      "Understand the core principles of UI and UX design.",
      "Create wireframes, prototypes, and user flows with purpose.",
      "Design clean, accessible, and user-friendly interfaces.",
      "Conduct user research and usability testing.",
      "Use tools like Figma for modern digital product design.",
      "Translate real user needs into thoughtful design solutions."
    ],
    includes: [
      { icon: Clock, text: "22 hours on-demand video" },
      { icon: FileText, text: "15 articles" },
      { icon: Download, text: "At least 5 savable resources" },
      { icon: Infinity, text: "Full lifetime access" },
      { icon: Smartphone, text: "Access on mobiles and desktop" },
      { icon: Award, text: "Certificate of completion" }
    ],
    modules: [
      {
        id: 1,
        title: "INTRODUCTION TO PRODUCT DESIGN",
        lessons: ["What is Product Design?", "Design Process Overview", "Industry Landscape"]
      },
      {
        id: 2,
        title: "DESIGN THINKING & UX FUNDAMENTALS",
        lessons: ["Understanding Users", "Problem Definition", "Ideation Techniques"]
      },
      {
        id: 3,
        title: "UI DESIGN PRINCIPLES",
        lessons: ["Visual Hierarchy", "Typography", "Color Theory", "Layout & Spacing"]
      },
      {
        id: 4,
        title: "FIGMA ESSENTIALS",
        lessons: ["Interface Overview", "Components & Variants", "Auto Layout", "Prototyping"]
      },
      {
        id: 5,
        title: "USER RESEARCH & TESTING",
        lessons: ["Research Methods", "Creating Personas", "Usability Testing", "Data Analysis"]
      },
      {
        id: 6,
        title: "PROTOTYPING & INTERACTIONS DESIGN",
        lessons: ["Low-fi Prototypes", "High-fi Prototypes", "Micro-interactions", "Animation Principles"]
      },
      {
        id: 7,
        title: "CASE STUDIES & PORTFOLIO BUILDING",
        lessons: ["Documenting Process", "Presenting Work", "Building Your Portfolio", "Career Tips"]
      }
    ]
  };

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <HeaderNav />
        <div className="flex-grow flex items-center justify-center">
          <Loader />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-purple-200">
      <HeaderNav  bgColor="bg-transparent"/>
      <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Header */}
            <div className=" rounded-2xl overflow-hidden">
              <div className="p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
                <p className="text-lg text-gray-600 italic mb-8 leading-relaxed">
                  "{course.quote}"
                </p>
                
                {/* Instructor Info */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center mr-4 text-white font-bold text-xl">
                    {course.instructor.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{course.instructor.name}</p>
                    <p className="text-gray-600">{course.instructor.title}</p>
                  </div>
                </div>
                
                {/* Rating and Stats */}
                <div className="flex flex-wrap items-center gap-6 text-xl">
                  <div className="flex items-center">
                    <div className="flex text-yellow-600 text-2xl mr-2">
                      {'★'.repeat(Math.floor(course.rating))}
                      {'☆'.repeat(5 - Math.floor(course.rating))}
                    </div>
                    <span className="font-semibold text-gray-900">{course.rating}</span>
                  </div>
                  <span className="text-gray-600">({course.ratingCount} Ratings)</span>
                  <span className="text-gray-600">{course.studentCount} students</span>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl p-8 border border-purple-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What you'll learn</h2>
              <div className="flex flex-col  gap-4">
                {course.learnings.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Outline */}
            <div className="rounded-2xl  overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Outline</h2>
                <div className="space-y-3">
                  {course.modules.map((module, index) => (
                    <div key={module.id} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="flex items-center">
                          
                          <span className="font-semibold text-gray-900 text-left">
                            MODULE {index + 1}: {module.title}
                          </span>
                        </div>
                        {expandedModules[module.id] ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                      
                      {expandedModules[module.id] && (
                        <div className="bg-white p-4 border-t border-gray-200">
                          <ul className="space-y-2">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <li key={lessonIndex} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-purple-700 rounded-full mr-3"></div>
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Course Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Course Image */}
                <div className="h-48 bg-purple-500 flex items-center justify-center">
                  <img src={course.courseImage} alt={course.title} className="w-full h-full object-cover" />
                </div>

                <div className="p-6">
                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                    <div className="inline-block ml-3 px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold">
                      {course.status}
                    </div>
                  </div>

                  {/* Enroll Button */}
                  <button onClick={() => navigate('/payment')} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 mb-6">
                    Enroll Now
                  </button>

                  {/* Course Includes */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 text-lg">This course includes:</h3>
                    {course.includes.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <item.icon className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetailPage;