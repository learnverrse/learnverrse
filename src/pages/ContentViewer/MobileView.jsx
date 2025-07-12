import React from 'react';
import { Play, ChevronDown, ChevronRight } from 'lucide-react';
import { FiFileText, FiDownload } from "react-icons/fi";

const MobileCourseViewer = ({ 
  courseData, 
  currentSection, 
  currentLesson, 
  resourceType, 
  setResourceType, 
  completedLessons, 
  currentTime, 
  duration, 
  isPlaying, 
  onTogglePlay, 
  onSeek, 
  onNext, 
  onShowPDF,
  currentSectionData,
  currentLessonData,
  selectLesson // Add this prop from MainView.jsx
}) => {
  const totalLessons = courseData.sections.reduce((acc, section) => acc + section.lessons.length, 0);
  const progressPercentage = Math.round((completedLessons.size / totalLessons) * 100);
  const [expandedSections, setExpandedSections] = React.useState(new Set([currentSection]));

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleSection = (sectionIndex) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionIndex)) {
      newExpanded.delete(sectionIndex);
    } else {
      newExpanded.add(sectionIndex);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="h-[calc(100vh-80px)] bg-gray-50">
      {/* Mobile Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2">
            {courseData.title}
          </h2>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-4 py-3 bg-white">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{progressPercentage}% completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Resources Toggle */}
      <div className="px-4 py-3 bg-white border-b">
        <h3 className="font-medium mb-3">Resources</h3>
        <div className="flex space-x-8">
          <button 
            onClick={() => setResourceType('video')}
            className="flex items-center space-x-2"
          >
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${resourceType === 'video' ? 'bg-purple-600 border-purple-600' : 'border-gray-300'}`}>
              {resourceType === 'video' && <div className="w-2 h-2 bg-white rounded-full"></div>}
            </div>
            <span className="text-sm">Videos</span>
          </button>
          <button 
            onClick={() => setResourceType('pdf')}
            className="flex items-center space-x-2"
          >
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${resourceType === 'pdf' ? 'bg-purple-600 border-purple-600' : 'border-gray-300'}`}>
              {resourceType === 'pdf' && <div className="w-2 h-2 bg-white rounded-full"></div>}
            </div>
            <span className="text-sm">PDF Slides</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-4 py-6 bg-white">
        {resourceType === 'video' ? (
          <div className="relative bg-gray-900 rounded-lg overflow-hidden">
            <div 
              className="aspect-video bg-cover bg-center flex items-center justify-center cursor-pointer"
              style={{ backgroundImage: `url('${currentLessonData.backgroundImage}')` }}
              onClick={onTogglePlay}
            >
              {!isPlaying && (
                <button className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
              )}
              {isPlaying && (
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-white text-sm">Playing...</div>
                </div>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div className="flex items-center justify-between text-white text-sm mb-2">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <div 
                className="h-1 bg-white/30 rounded-full cursor-pointer"
                onClick={onSeek}
              >
                <div 
                  className="h-full bg-purple-500 rounded-full transition-all duration-300"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
            <FiFileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-700 mb-2">PDF Slides Available</h3>
            <p className="text-gray-500 text-sm mb-4">Tap to view study materials</p>
            <button 
              onClick={onShowPDF}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Open PDF
            </button>
          </div>
        )}
      </div>

      {/* Lesson Content */}
      <div className="px-4 pb-6 bg-white">
        <h2 className="text-xl font-semibold mb-2">{currentLessonData.title}</h2>
        <p className="text-gray-600 text-sm mb-6">{currentLessonData.description}</p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button 
            onClick={onNext}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium"
          >
            Next
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium flex items-center justify-center space-x-2">
            <FiDownload className="w-4 h-4" />
            <span>Save</span>
          </button>
        </div>
      </div>

      {/* Course Outline - Updated to match Sidebar design */}
      <div className="px-4 py-6 bg-white border-t">
        <h3 className="font-medium mb-4">Course Outline</h3>
        <div className="space-y-2">
          {courseData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <button
                onClick={() => toggleSection(sectionIndex)}
                className="flex items-center justify-between w-full text-left p-3 rounded-lg hover:bg-gray-50"
              >
                <span className="font-medium">{section.title}</span>
                {expandedSections.has(sectionIndex) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
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

export default MobileCourseViewer;