import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import courseData from './CourseView';
import Sidebar from './Sidebar';
import VideoPlayer from './VideoPlayer';
import PDFViewer from './PDFViewer';
import MobileCourseViewer from './MobileView';
import { FiFileText } from "react-icons/fi";
import QuizUI from './QuizUI';

const CourseContentViewer = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [resourceType, setResourceType] = useState('video');
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [expandedSections, setExpandedSections] = useState(new Set([0]));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showPDF, setShowPDF] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [uploadedPDFContent, setUploadedPDFContent] = useState(null);

  const currentSectionData = courseData.sections[currentSection];
  const currentLessonData = currentSectionData.lessons[currentLesson];
  const duration = currentLessonData.videoDuration;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const toggleSection = (sectionIndex) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionIndex)) {
      newExpanded.delete(sectionIndex);
    } else {
      newExpanded.add(sectionIndex);
    }
    setExpandedSections(newExpanded);
  };

  const selectLesson = (sectionIndex, lessonIndex) => {
    setCurrentSection(sectionIndex);
    setCurrentLesson(lessonIndex);
    setCurrentTime(0);
    setIsPlaying(false);
    setShowQuiz(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVideoSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = Math.floor((clickX / width) * duration);
    setCurrentTime(newTime);
  };

  const handleNext = () => {
    const currentLessonKey = `${currentSection}-${currentLesson}`;
    setCompletedLessons(prev => new Set([...prev, currentLessonKey]));

    if (currentLesson < currentSectionData.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    } else if (currentSection < courseData.sections.length - 1) {
      // Show quiz at the end of each section except the last one
      setShowQuiz(true);
    } else {
      // For the last section, just mark as completed
      setCurrentLesson(currentLesson + 1);
    }
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentLesson(courseData.sections[currentSection - 1].lessons.length - 1);
    }
    setCurrentTime(0);
    setIsPlaying(false);
    setShowQuiz(false);
  };

  const handleQuizComplete = () => {
    setShowQuiz(false);
    if (currentSection < courseData.sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentLesson(0);
    }
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
  };

  const isLastLesson = currentSection === courseData.sections.length - 1 && 
                     currentLesson === currentSectionData.lessons.length - 1;
  const isFirstLesson = currentSection === 0 && currentLesson === 0;

  const getPDFContent = () => {
    if (uploadedPDFContent) {
      return uploadedPDFContent;
    }
    return currentLessonData.pdfContent || null;
  };

  if (isMobile) {
    return (
      <>
        {showQuiz ? (
          <QuizUI 
            onQuizComplete={handleQuizComplete} 
            onCloseQuiz={handleCloseQuiz} 
          />
        ) : (
          <MobileCourseViewer 
            courseData={courseData}
            currentSection={currentSection}
            currentLesson={currentLesson}
            resourceType={resourceType}
            setResourceType={setResourceType}
            completedLessons={completedLessons}
            currentTime={currentTime}
            duration={duration}
            isPlaying={isPlaying}
            onTogglePlay={togglePlayPause}
            onSeek={handleVideoSeek}
            onNext={handleNext}
            onShowPDF={() => setShowPDF(true)}
            currentSectionData={currentSectionData}
            currentLessonData={currentLessonData}
            selectLesson={selectLesson}
          />
        )}
        {showPDF && getPDFContent() && (
          <PDFViewer 
            pdfContent={getPDFContent()}
            onClose={() => setShowPDF(false)}
          />
        )}
      </>
    );
  }

  if (showQuiz) {
    return (
      <QuizUI 
        onQuizComplete={handleQuizComplete} 
        onCloseQuiz={handleCloseQuiz} 
      />
    );
  }

  return (
    <div className="h-[calc(100vh-80px)] bg-gray-50 flex">
      <Sidebar 
        courseData={courseData}
        currentSection={currentSection}
        currentLesson={currentLesson}
        resourceType={resourceType}
        setResourceType={setResourceType}
        expandedSections={expandedSections}
        toggleSection={toggleSection}
        selectLesson={selectLesson}
        completedLessons={completedLessons}
        onShowPDF={() => setShowPDF(true)}
      />

      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">{currentLessonData.title}</h1>
          
          {resourceType === 'video' ? (
            <VideoPlayer 
              lesson={currentLessonData}
              isPlaying={isPlaying}
              currentTime={currentTime}
              duration={duration}
              onTogglePlay={togglePlayPause}
              onSeek={handleVideoSeek}
            />
          ) : (
            <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-8 text-center mb-6">
              <FiFileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">PDF Slides Available</h3>
              <p className="text-gray-500 mb-4">Click "View PDF" in the sidebar to open the study materials</p>
              <button 
                onClick={() => setShowPDF(true)}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Open PDF Viewer
              </button>
            </div>
          )}

          <div className="mb-8">
            <p className="text-gray-600 text-lg pt-3">{currentLessonData.description}</p>
          </div>

          <div className="flex justify-between items-center">
            <button 
              onClick={handlePrevious}
              disabled={isFirstLesson}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium ${
                isFirstLesson 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <FaArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            
            <button 
              onClick={handleNext}
              className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700"
            >
              <span>
                {currentLesson === currentSectionData.lessons.length - 1 && 
                 currentSection !== courseData.sections.length - 1 
                  ? 'Take Quiz' 
                  : isLastLesson 
                    ? 'Finish Course' 
                    : 'Next'}
              </span>
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {showPDF && getPDFContent() && (
        <PDFViewer 
          pdfContent={getPDFContent()}
          onClose={() => setShowPDF(false)}
        />
      )}
    </div>
  );
};

export default CourseContentViewer;