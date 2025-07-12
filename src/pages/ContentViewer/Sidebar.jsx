import React from 'react';
import { FaChevronDown , FaChevronRight , FaEye  } from 'react-icons/fa';
import { FiFileText } from "react-icons/fi";



const Sidebar = ({ 
  courseData, 
  currentSection, 
  currentLesson, 
  resourceType, 
  setResourceType, 
  expandedSections, 
  toggleSection, 
  selectLesson, 
  completedLessons,
  onShowPDF 
}) => {
  return (
    <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-purple-600">{courseData.title}</h1>
      </div>

      {/* Resources */}
      <div className="p-6 border-b">
        <h3 className="font-medium mb-4">Resources</h3>
        <div className="space-y-3">
          <button 
            onClick={() => setResourceType('video')}
            className="flex items-center space-x-3 w-full"
          >
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${resourceType === 'video' ? 'bg-purple-600 border-purple-600' : 'border-gray-300'}`}>
              {resourceType === 'video' && <div className="w-2 h-2 bg-white rounded-full"></div>}
            </div>
            <span className="text-sm">Video</span>
          </button>
          <button 
            onClick={() => setResourceType('pdf')}
            className="flex items-center space-x-3 w-full"
          >
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${resourceType === 'pdf' ? 'bg-purple-600 border-purple-600' : 'border-gray-300'}`}>
              {resourceType === 'pdf' && <div className="w-2 h-2 bg-white rounded-full"></div>}
            </div>
            <span className="text-sm">PDF Slides</span>
          </button>
          {resourceType === 'pdf' && (
            <button 
              onClick={onShowPDF}
              className="flex items-center space-x-2 w-full mt-2 p-2 bg-purple-50 text-purple-700 rounded hover:bg-purple-100 transition-colors"
            >
              <FiFileText className="w-4 h-4" />
              <span className="text-sm">View PDF</span>
              <FaEye className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Course Outline */}
      <div className="p-6">
        <h3 className="font-medium mb-4">Course Outline</h3>
        <div className="space-y-2">
          {courseData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <button
                onClick={() => toggleSection(sectionIndex)}
                className="flex items-center justify-between w-full text-left p-3 rounded-lg hover:bg-gray-50"
              >
                <span className="font-medium">{section.title}</span>
                {expandedSections.has(sectionIndex) ? 
                  <FaChevronDown  className="w-4 h-4" /> : 
                  <FaChevronRight className="w-4 h-4" />
                }
              </button>
              {expandedSections.has(sectionIndex) && (
                <div className="ml-4 space-y-1">
                  {section.lessons.map((lesson, lessonIndex) => (
                    <button
                      key={lessonIndex}
                      onClick={() => selectLesson(sectionIndex, lessonIndex)}
                      className={`flex items-center space-x-3 w-full p-3 rounded-lg text-left hover:bg-gray-50 ${
                        currentSection === sectionIndex && currentLesson === lessonIndex 
                          ? 'bg-purple-50 border-l-4 border-purple-600' 
                          : ''
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        completedLessons.has(`${sectionIndex}-${lessonIndex}`) 
                          ? 'bg-purple-600 border-purple-600' 
                          : 'border-gray-300'
                      }`}>
                        {completedLessons.has(`${sectionIndex}-${lessonIndex}`) && 
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        }
                      </div>
                      <span className="text-sm">{lesson.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;