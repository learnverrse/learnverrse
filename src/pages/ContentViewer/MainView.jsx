import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Sidebar from './Sidebar';
import VideoPlayer from './VideoPlayer';
import PDFViewer from './PDFViewer';
import MobileCourseViewer from './MobileView';
import { FiFileText } from "react-icons/fi";
import QuizUI from './QuizUI';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import Loader from '@/components/UI/Loader';
import { MdError } from "react-icons/md";


const CourseContentViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  
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
  const [courseData, setCourseData] = useState(null);
  const [progressData, setProgressData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [courseNotFound, setCourseNotFound] = useState(false);

  const courseId = location.state?.courseId;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchCourseData = async () => {
      if (!courseId) {
        toast.error('No course ID provided');
        setLoading(false);
        setCourseNotFound(true);
        return;
      }

      try {
        setLoading(true);
        
        // Fetch course content and progress
        const [courseResponse, progressResponse] = await Promise.all([
          axiosPrivate.get(`courses/content/${courseId}`),
          axiosPrivate.get(`progress/access/${localStorage.getItem('userId')}/${courseId}`)
        ]);

        if (courseResponse.data.success && progressResponse.data.success) {
          setCourseData(courseResponse.data.data.course || courseResponse.data.data);
          setProgressData(progressResponse.data.data);
          setCourseNotFound(false);
        } else {
          throw new Error('Failed to fetch course data');
        }
        
      } catch (err) {
        console.error('Error fetching course data:', err);
        toast.error('Failed to load course content');
        setCourseNotFound(true);
        
        if (err.response?.status === 403 || err.response?.data?.hasAccess === false) {
          navigate('/payment', { state: { courseId } });
        }
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchCourseData();
    } else {
      // If no courseId, immediately stop loading and show not found
      setLoading(false);
      setCourseNotFound(true);
    }
  }, [courseId, navigate, axiosPrivate]);

  useEffect(() => {
    if (progressData && courseData) {
      // Set current section and lesson based on progress
      const currentProgress = progressData.progress.currentSection;
      if (currentProgress) {
        const sectionIndex = courseData.sections.findIndex(
          section => section.sectionId === currentProgress.sectionId
        );
        
        if (sectionIndex !== -1) {
          const lessonIndex = courseData.sections[sectionIndex].lessons?.findIndex(
            lesson => lesson.chapterId === currentProgress.chapterId
          ) || 0;
          
          setCurrentSection(sectionIndex);
          setCurrentLesson(lessonIndex);
        }
      }

      // Mark completed lessons
      const completed = new Set();
      progressData.progress.sections?.forEach(section => {
        section.chapters?.forEach(chapter => {
          if (chapter.isCompleted) {
            completed.add(`${section.sectionId}-${chapter.chapterId}`);
          }
        });
      });
      setCompletedLessons(completed);
    }
  }, [progressData, courseData]);

  useEffect(() => {
    let interval;
    if (isPlaying && courseData) {
      const duration = courseData.sections[currentSection]?.lessons[currentLesson]?.videoDuration || 0;
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
  }, [isPlaying, courseData, currentSection, currentLesson]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (courseNotFound || !courseData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md items-center flex flex-col">
          <div className=" mb-4"><MdError className='text-red-500 text-7xl' /></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Course Not Found</h2>
          <p className="text-gray-600 mb-6">
            The course you're trying to access doesn't exist.
          </p>
          <button 
            onClick={() => navigate('/learner-dashboard/my-courses')}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center mx-auto"
          >
            <FaArrowLeft className="mr-2" />
            Back to My Courses
          </button>
        </div>
      </div>
    );
  }

  const currentSectionData = courseData.sections[currentSection];
  const currentLessonData = currentSectionData.lessons[currentLesson];
  const duration = currentLessonData.videoDuration;

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

  const updateProgress = async (isCompleted = true) => {
    try {
      await axiosPrivate.patch(`progress/update`, {
        courseId,
        sectionId: currentSectionData.sectionId,
        chapterId: currentLessonData.chapterId,
        isCompleted,
        timeSpent: currentTime
      });
    } catch (err) {
      console.error('Error updating progress:', err);
      toast.error('Failed to save progress');
    }
  };

  const handleNext = () => {
    const currentLessonKey = `${currentSection}-${currentLesson}`;
    setCompletedLessons(prev => new Set([...prev, currentLessonKey]));

    // Update progress
    updateProgress(true);

    if (currentLesson < currentSectionData.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    } else if (currentSection < courseData.sections.length - 1) {
      setShowQuiz(true);
    } else {
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