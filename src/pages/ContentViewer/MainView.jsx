import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useLocation, useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import Sidebar from './Sidebar';
import VideoPlayer from './VideoPlayer';
import PDFViewer from './PDFViewer';
import MobileCourseViewer from './MobileView';
import { FiFileText } from 'react-icons/fi';
import QuizUI from './QuizUI';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import useAuthProvider from '@/hooks/useAuthProvider'; // Add this import
import Loader from '@/components/UI/Loader';
import { MdError } from 'react-icons/md';

const CourseContentViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { courseId } = useParams(); // Get courseId from URL params
  const axiosPrivate = useAxiosPrivate();

  // Get user from auth context
  const {
    auth: { user },
  } = useAuthProvider();

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

  // Get courseId from URL params first, then fallback to state
  const currentCourseId = courseId || location.state?.courseId;

  console.log('CourseId sources:', {
    fromParams: courseId,
    fromState: location.state?.courseId,
    final: currentCourseId,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Transform backend data to match frontend expectations
  const transformCourseData = (backendData) => {
    console.log('Transforming course data:', backendData); // Debug log

    // if (!backendData?.course) {
    //   console.error('No course data found in backend response');
    //   return null;
    // }

    // const course = backendData.course;

    // you were using wrong endpoints in promise.all(fixed now), and also for this section backenddata does not return a course object directly
    return {
      ...backendData,
      sections: backendData.sections.map((section) => ({
        ...section,
        lessons:
          section.chapters?.map((chapter) => ({
            chapterId: chapter.chapterId,
            title: chapter.title || 'Untitled Lesson',
            description: chapter.content || 'No description available',
            videoUrl: chapter.video || null,
            videoDuration: 0, // You may need to calculate this or get from backend
            pdfContent: null, // Add PDF content if available
            ...chapter,
          })) || [],
      })),
    };
    // return {
    //   ...course,
    //   sections: course.sections.map((section) => ({
    //     ...section,
    //     lessons:
    //       section.chapters?.map((chapter) => ({
    //         chapterId: chapter.chapterId,
    //         title: chapter.title || 'Untitled Lesson',
    //         description: chapter.content || 'No description available',
    //         videoUrl: chapter.video || null,
    //         videoDuration: 0, // You may need to calculate this or get from backend
    //         pdfContent: null, // Add PDF content if available
    //         ...chapter,
    //       })) || [],
    //   })),
    // };
  };

  useEffect(() => {
    const fetchCourseData = async () => {
      // Check for required data
      if (!currentCourseId) {
        console.error('No course ID provided');
        toast.error('No course ID provided');
        setLoading(false);
        setCourseNotFound(true);
        return;
      }

      if (!user?._id) {
        console.error('No user ID available');
        toast.error('User not authenticated');
        setLoading(false);
        setCourseNotFound(true);
        return;
      }

      try {
        setLoading(true);
        console.log('Fetching course data for:', {
          courseId: currentCourseId,
          userId: user._id,
        }); // Debug log

        // Validate parameters before making API calls
        console.log('API call parameters:', {
          userId: user._id,
          courseId: currentCourseId,
          userIdType: typeof user._id,
          courseIdType: typeof currentCourseId,
        });

        // Use the courseId from URL params - matches backend: progress/access/{userId}/{courseId}
        const [courseResponse, progressResponse] = await Promise.all([
          axiosPrivate.get(`progress/${user._id}/${currentCourseId}`),
          axiosPrivate.get(`progress/access/${user._id}/${currentCourseId}`),
        ]);

        console.log('Course response:', courseResponse?.data); // Debug log
        console.log('Progress response:', progressResponse?.data); // Debug log

        if (courseResponse.data.success && progressResponse.data.success) {
          const transformedCourse = transformCourseData(
            courseResponse.data.data
          );

          if (!transformedCourse) {
            throw new Error('Failed to transform course data');
          }

          setCourseData(transformedCourse);
          setProgressData(courseResponse.data.data.progress);
          setCourseNotFound(false);

          console.log('Course data set successfully:', transformedCourse); // Debug log
        } else {
          console.error('API responses indicate failure:', {
            courseSuccess: courseResponse.data.success,
            progressSuccess: progressResponse.data.success,
          });
          throw new Error('Failed to fetch course data');
        }
      } catch (err) {
        console.error('Error fetching course data:', err);
        console.error('Error details:', {
          message: err.message,
          response: err.response?.data,
          status: err.response?.status,
        });

        toast.error('Failed to load course content');
        setCourseNotFound(true);

        if (
          err.response?.status === 403 ||
          err.response?.data?.hasAccess === false
        ) {
          console.log('Access denied, redirecting to payment');
          navigate('/payment', { state: { courseId: currentCourseId } });
        }
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if we have both courseId and user
    if (currentCourseId && user?._id) {
      fetchCourseData();
    } else {
      console.log('Missing required data:', {
        courseId: currentCourseId,
        userId: user?._id,
      });
      setLoading(false);
      setCourseNotFound(true);
    }
  }, [currentCourseId, user?._id, navigate, axiosPrivate]); // Use currentCourseId in dependencies

  useEffect(() => {
    if (progressData && courseData) {
      console.log('Setting up progress data:', { progressData, courseData }); // Debug log

      // Set current section and lesson based on progress
      const currentProgress = progressData.currentSection;
      if (currentProgress) {
        const sectionIndex = courseData.sections.findIndex(
          (section) => section.sectionId === currentProgress.sectionId
        );

        if (sectionIndex !== -1) {
          const lessonIndex =
            courseData.sections[sectionIndex].lessons?.findIndex(
              (lesson) => lesson.chapterId === currentProgress.chapterId
            ) || 0;

          console.log('Setting current section/lesson:', {
            sectionIndex,
            lessonIndex,
          });
          setCurrentSection(sectionIndex);
          setCurrentLesson(lessonIndex);
        }
      }

      // Mark completed lessons
      const completed = new Set();
      progressData.sections?.forEach((section) => {
        section.chapters?.forEach((chapter) => {
          if (chapter.isCompleted) {
            completed.add(`${section.sectionId}-${chapter.chapterId}`);
          }
        });
      });
      setCompletedLessons(completed);
      console.log('Completed lessons:', completed); // Debug log
    }
  }, [progressData, courseData]);

  useEffect(() => {
    let interval;
    if (isPlaying && courseData) {
      const duration =
        courseData.sections[currentSection]?.lessons[currentLesson]
          ?.videoDuration || 0;
      interval = setInterval(() => {
        setCurrentTime((prev) => {
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

  // Show loading while waiting for user data
  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (courseNotFound || !courseData) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
        <div className="flex max-w-md flex-col items-center rounded-lg bg-white p-8 text-center shadow-md">
          <div className="mb-4">
            <MdError className="text-7xl text-red-500" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            Course Not Found
          </h2>
          <p className="mb-6 text-gray-600">
            The course you're trying to access doesn't exist or you don't have
            access.
          </p>
          <button
            onClick={() => navigate('/learner-dashboard/my-courses')}
            className="mx-auto flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700"
          >
            <FaArrowLeft className="mr-2" />
            Back to My Courses
          </button>
        </div>
      </div>
    );
  }

  // Safety check for sections and lessons
  if (!courseData.sections || courseData.sections.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
        <div className="flex max-w-md flex-col items-center rounded-lg bg-white p-8 text-center shadow-md">
          <div className="mb-4">
            <MdError className="text-7xl text-red-500" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            No Content Available
          </h2>
          <p className="mb-6 text-gray-600">
            This course doesn't have any content yet.
          </p>
          <button
            onClick={() => navigate('/learner-dashboard/my-courses')}
            className="mx-auto flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700"
          >
            <FaArrowLeft className="mr-2" />
            Back to My Courses
          </button>
        </div>
      </div>
    );
  }

  const currentSectionData = courseData.sections[currentSection];

  // Safety check for current section
  if (
    !currentSectionData ||
    !currentSectionData.lessons ||
    currentSectionData.lessons.length === 0
  ) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
        <div className="flex max-w-md flex-col items-center rounded-lg bg-white p-8 text-center shadow-md">
          <div className="mb-4">
            <MdError className="text-7xl text-red-500" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            No Lessons Available
          </h2>
          <p className="mb-6 text-gray-600">
            This section doesn't have any lessons yet.
          </p>
          <button
            onClick={() => navigate('/learner-dashboard/my-courses')}
            className="mx-auto flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700"
          >
            <FaArrowLeft className="mr-2" />
            Back to My Courses
          </button>
        </div>
      </div>
    );
  }

  const currentLessonData = currentSectionData.lessons[currentLesson];
  const duration = currentLessonData?.videoDuration || 0;

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
        courseId: currentCourseId, // Use currentCourseId
        sectionId: currentSectionData.sectionId,
        chapterId: currentLessonData.chapterId,
        isCompleted,
        timeSpent: currentTime,
      });
    } catch (err) {
      console.error('Error updating progress:', err);
      toast.error('Failed to save progress');
    }
  };

  const handleNext = () => {
    const currentLessonKey = `${currentSectionData.sectionId}-${currentLessonData.chapterId}`;
    setCompletedLessons((prev) => new Set([...prev, currentLessonKey]));

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
      setCurrentLesson(
        courseData.sections[currentSection - 1].lessons.length - 1
      );
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

  const isLastLesson =
    currentSection === courseData.sections.length - 1 &&
    currentLesson === currentSectionData.lessons.length - 1;
  const isFirstLesson = currentSection === 0 && currentLesson === 0;

  const getPDFContent = () => {
    if (uploadedPDFContent) {
      return uploadedPDFContent;
    }
    return currentLessonData?.pdfContent || null;
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
    <div className="flex h-[calc(100vh-80px)] bg-gray-50">
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
          <h1 className="mb-6 text-3xl font-bold">
            {currentLessonData?.title || 'Untitled Lesson'}
          </h1>

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
            <div className="mb-6 rounded-lg border-2 border-dashed border-gray-300 bg-white p-8 text-center">
              <FiFileText className="mx-auto mb-4 h-16 w-16 text-gray-400" />
              <h3 className="mb-2 text-lg font-medium text-gray-700">
                PDF Slides Available
              </h3>
              <p className="mb-4 text-gray-500">
                Click "View PDF" in the sidebar to open the study materials
              </p>
              <button
                onClick={() => setShowPDF(true)}
                className="rounded-lg bg-purple-600 px-6 py-2 text-white transition-colors hover:bg-purple-700"
              >
                Open PDF Viewer
              </button>
            </div>
          )}

          <div className="mb-8">
            <p className="pt-3 text-lg text-gray-600">
              {currentLessonData?.description || 'No description available'}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={isFirstLesson}
              className={`flex items-center space-x-2 rounded-lg px-6 py-3 font-medium ${
                isFirstLesson
                  ? 'cursor-not-allowed bg-gray-100 text-gray-400'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <FaArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNext}
              className="flex items-center space-x-2 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700"
            >
              <span>
                {currentLesson === currentSectionData.lessons.length - 1 &&
                currentSection !== courseData.sections.length - 1
                  ? 'Take Quiz'
                  : isLastLesson
                    ? 'Finish Course'
                    : 'Next'}
              </span>
              <FaArrowRight className="h-4 w-4" />
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
