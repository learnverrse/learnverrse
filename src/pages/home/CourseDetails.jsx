import React, { useState, useEffect } from 'react';
import HeaderNav from '@/components/UI/HeaderNav';
import Footer from '@/components/UI/footer';
import Loader from '@/components/UI/Loader';
import {
  ChevronDown,
  ChevronUp,
  Clock,
  FileText,
  Award,
  Smartphone,
  Download,
  Infinity,
  Star,
  CheckCircle,
} from 'lucide-react';
import { CourseHolder } from '@/components/details';
import { useParams, useNavigate } from 'react-router';
import { axiosInstance } from '@/apis/axios';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { toast } from 'react-toastify';
import Naira from '@/components/utils/Naira';
import useAuthProvider from '@/hooks/useAuthProvider';

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const {
    auth: { user },
  } = useAuthProvider();

  const axiosPrivate = useAxiosPrivate(); 

  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});
  const [enrolling, setEnrolling] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [checkingEnrollment, setCheckingEnrollment] = useState(true);

  // Check enrollment status when component loads
  useEffect(() => {
    const checkEnrollment = async () => {
      if (!user || !courseId) {
        setCheckingEnrollment(false);
        return;
      }
      
      try {
        const res = await axiosPrivate.get(`/progress/${user._id}/${courseId}`);
        setIsEnrolled(res.data?.success && res.data?.data ? true : false);
      } catch (error) {
        console.error('Error checking enrollment:', error);
        setIsEnrolled(false);
      } finally {
        setCheckingEnrollment(false);
      }
    };

    checkEnrollment();
  }, [user, courseId, axiosPrivate]);

  async function handleCourseAction() {

    if (!user) {
    navigate("/signin"); 
    return;
  }

    if (isEnrolled) {
    const currentCourseId = courseId;

    // Navigate to learning page with courseId in URL params
    navigate(`/learner-dashboard/learning-page/${currentCourseId}`, {
      state: { 
        course,
        courseId: currentCourseId // Also pass courseId in state as backup
      }
    });
    return;
  }

    await Enroll();
  }

  async function Enroll() {
    const currentCourseId = courseId;
    const userId = user?._id;

    // Enhanced validation
    if (!currentCourseId) {
      toast.error('Course ID not found');
      return;
    }

    if (!userId) {
      toast.error('User not authenticated');
      return;
    }

    if (!course?._id) {
      toast.error('Course data not loaded');
      return;
    }

    console.log('Enrollment attempt:', {
      courseId: currentCourseId,
      userId: userId,
      coursePrice: course.price,
      user: user
    });

    try {
      setEnrolling(true);

      // Check if course is free or paid
      if (course.price > 0) {
        // Paid course → initialize payment
        console.log('Initializing payment for course:', currentCourseId);

        const res = await axiosPrivate.post('payments/initialize', {
          courseId: currentCourseId,
        });

        console.log('Payment initialization response:', res);

        // Handle undefined response
        if (!res) {
          throw new Error('No response received from payment service');
        }

        const authUrl = res.data?.data?.authorizationUrl;

        if (res.data?.success && authUrl) {
          console.log('Redirecting to:', authUrl);

          setTimeout(() => {
            window.location.assign(authUrl);
          }, 100);

          toast.success('Redirecting to payment gateway...');
        } else {
          throw new Error('Invalid response from payment service');
        }
      } else {
        // Free course → enroll directly
        console.log('Enrolling in free course:', currentCourseId);
        console.log('Request payload:', { userId, courseId: currentCourseId });

        try {
          const response = await axiosPrivate.post(`enrollment/enrol`, {
            userId,
            courseId: currentCourseId,
          });

          console.log('Enrollment response:', response);
          console.log('Response data:', response?.data);
          console.log('Response status:', response?.status);

          // Handle case where response is undefined or null
          if (!response) {
            console.warn('No response received from enrollment endpoint');
            // Try to verify enrollment directly since request might have succeeded
            try {
              const verify = await axiosPrivate.get(`/progress/${userId}/${currentCourseId}`);
              if (verify.data?.success && verify.data?.data) {
                console.log('Enrollment verified despite undefined response:', verify.data);
                setIsEnrolled(true);
                toast.success('Enrolled successfully!');
              } else {
                toast.error('Enrollment failed. Please try again.');
              }
            } catch (verifyError) {
              console.error('Failed to verify enrollment after undefined response:', verifyError);
              toast.error('Enrollment status unclear. Please refresh and try again.');
            }
            return;
          }

          // Handle normal response cases
          if (response?.data?.success) {
            console.log('Enrollment successful:', response.data);
            toast.success(response.data.message || 'Enrolled successfully!');
            
            // Immediately re-check enrollment from backend (same as paid courses)
            try {
              const verify = await axiosPrivate.get(`/progress/${userId}/${currentCourseId}`);
              setIsEnrolled(verify.data?.success && verify.data?.data ? true : false);
              console.log('Enrollment verification:', verify.data);
            } catch (verifyError) {
              console.error('Failed to verify enrollment:', verifyError);
              // Still set to enrolled if enrollment was successful but verification failed
              setIsEnrolled(true);
            }
          } else if (response?.status === 200 || response?.status === 201) {
            // Handle cases where status is success but data structure is different
            console.log('Enrollment likely successful based on status code:', response.status);
            
            // Verify enrollment from backend
            try {
              const verify = await axiosPrivate.get(`/progress/${userId}/${currentCourseId}`);
              if (verify.data?.success && verify.data?.data) {
                console.log('Enrollment verified:', verify.data);
                setIsEnrolled(true);
                toast.success('Enrolled successfully!');
              } else {
                toast.error('Enrollment failed. Please try again.');
              }
            } catch (verifyError) {
              console.error('Failed to verify enrollment:', verifyError);
              toast.error('Enrollment status unclear. Please refresh and try again.');
            }
          } else {
            console.warn('Unexpected response structure:', response);
            toast.error('Enrollment failed. Please try again.');
          }
        } catch (enrollmentError) {
          console.error('Enrollment request failed:', enrollmentError);
          
          // Log more details about the error
          if (enrollmentError.response) {
            console.error('Error response:', enrollmentError.response.data);
            console.error('Error status:', enrollmentError.response.status);
          } else if (enrollmentError.request) {
            console.error('No response received:', enrollmentError.request);
          } else {
            console.error('Error message:', enrollmentError.message);
          }
          
          throw enrollmentError; // Re-throw to be caught by outer catch block
        }
      }
    } catch (error) {
      console.error('Enrollment error:', error);

      let message = 'Something went wrong';
      
      if (error.response) {
        // Server responded with error status
        const errorData = error.response.data;
        message = errorData?.message || errorData?.error || `Server error: ${error.response.status}`;
        
        // Log server error details
        console.error('Server error details:', {
          status: error.response.status,
          data: errorData,
          headers: error.response.headers
        });
      } else if (error.request) {
        // Network error - no response received
        message = 'Network error. Please check your connection.';
        console.error('Network error - no response received');
      } else if (error.message) {
        // Other error
        message = error.message;
      }
      
      toast.error(message);
    } finally {
      setEnrolling(false);
    }
  }

  useEffect(() => {
    const fetchCourse = async () => {
      if (!courseId) return;
      
      try {
        setLoading(true);
        console.log('Fetching course with ID:', courseId);
        
        const res = await axiosInstance.get(`courses/public/${courseId}`);
        const data = res.data.data;
        
        console.log('Course data:', data);
        setCourse(data);
      } catch (err) {
        console.error('Failed to load course:', err);
        
        let errorMessage = 'Failed to load course';
        if (err.response?.data?.message) {
          errorMessage = err.response.data.message;
        } else if (err.message) {
          errorMessage = err.message;
        }
        
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  const includes = [
    { icon: Clock, text: '22 hours on-demand video' },
    { icon: FileText, text: '15 articles' },
    { icon: Download, text: 'At least 5 savable resources' },
    { icon: Infinity, text: 'Full lifetime access' },
    { icon: Smartphone, text: 'Access on mobiles and desktop' },
    { icon: Award, text: 'Certificate of completion' },
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating || 0);
    const hasHalfStar = (rating || 0) % 1 >= 0.5;

    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-7 w-7  ${
              index < fullStars
                ? 'fill-yellow-700 text-yellow-600'
                : index === fullStars && hasHalfStar
                  ? 'fill-yellow-700/50 text-yellow-600'
                  : 'text-yellow-700'
            }`}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col bg-gray-50">
        <HeaderNav />
        <div className="flex flex-grow items-center justify-center">
          <Loader />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-purple-200">
      <HeaderNav bgColor="bg-transparent" />
      <main className="container mx-auto max-w-7xl flex-grow px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Course Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Course Header */}
            <div className="overflow-hidden rounded-2xl">
              <div className="p-8">
                <h1 className="mb-4 text-4xl font-bold text-gray-900">
                  {course?.title}
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-gray-600 italic">
                  "{course?.quote}" "{course?.description}"
                </p>

                {/* Instructor Info */}
                <div className="mb-6 flex items-center">
                  <div className="bg-primary-500 mr-4 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white">
                    {course?.educatorName?.charAt(0)}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      {course?.educatorName}
                    </p>
                  </div>
                </div>

                {/* Rating and Stats */}
                <div className="flex flex-wrap items-center gap-6 text-xl">
                  <div className="flex items-center">
                    {renderStars(course?.averageRating)}
                    <span className="ml-2 font-semibold text-gray-900">
                      {course?.averageRating || 0}
                    </span>
                  </div>
                  <span className="text-gray-600">
                    (
                    {Object.values(course?.ratingBreakdown || {}).reduce(
                      (a, b) => a + b,
                      0
                    )}{' '}
                    Ratings)
                  </span>
                </div>
              </div>
            </div>


            {/* Course Outline */}
            <div className="overflow-hidden rounded-2xl">
              <div className="p-8">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Course Outline
                </h2>
                <div className="space-y-3">
                  {course?.sections?.map((section, index) => (
                    <div
                      key={section.sectionId}
                      className="overflow-hidden rounded-xl border border-gray-200"
                    >
                      <button
                        onClick={() => toggleSection(section.sectionId)}
                        className="flex w-full items-center justify-between bg-gray-50 p-4 transition-colors duration-200 hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <span className="text-left font-semibold text-gray-900">
                            SECTION {index + 1}: {section.sectionTitle}
                          </span>
                        </div>
                        {expandedSections[section.sectionId] ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>

                      {expandedSections[section.sectionId] && (
                        <div className="border-t border-gray-200 bg-white p-4">
                          <ul className="space-y-2">
                            {section.chapters?.map((chapter) => (
                              <li
                                key={chapter.chapterId}
                                className="flex items-center text-gray-700"
                              >
                                <div className="mr-3 h-2 w-2 rounded-full bg-purple-700"></div>
                                <span className="font-medium">
                                  {chapter.title}
                                </span>
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
              <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
                {/* Course Image */}
                <div className="flex h-48 items-center justify-center bg-purple-500">
                  <img
                    src={course.image || CourseHolder}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  {/* Price */}
                  <div className="mb-4 text-center">
                    <Naira
                      amount={course.price}
                      className="text-3xl font-bold text-gray-900"
                    />
                    <div className="bg-primary-100 text-primary-800 ml-3 inline-block rounded-full px-3 py-1 text-sm font-semibold">
                      {course.status || 'Available'}
                    </div>
                  </div>

                  {/* Enroll Button */}
                  <button
                    onClick={handleCourseAction}
                    disabled={enrolling || checkingEnrollment}
                    className={`mb-6 w-full transform rounded-xl px-6 py-4 font-bold text-white transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed ${
                      isEnrolled
                        ? 'bg-green-600 hover:bg-green-700 disabled:bg-green-300'
                        : 'bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300'
                    }`}
                  >
                    {checkingEnrollment ? (
                      'Checking...'
                    ) : enrolling ? (
                      'Processing...'
                    ) : !user ? (
                      'Please Login'
                    ) : isEnrolled ? (
                      <div className="flex items-center justify-center">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Go to Course
                      </div>
                    ) : (
                      'Enroll Now'
                    )}
                  </button>

                  {/* Course Includes */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      This course includes:
                    </h3>
                    {includes.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <item.icon className="mr-3 h-5 w-5 flex-shrink-0 text-purple-600" />
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