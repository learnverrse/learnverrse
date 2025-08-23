import React, { useEffect } from 'react';
import { useState } from 'react';
import CourseEnrolledCard from './../components/UI/CourseEnrolledCard';
import image234 from '@/assets/student-courses-images/image234.png';
import image176744 from '@/assets/student-courses-images/176744.jpg';
import image2149 from '@/assets/student-courses-images/2149.jpg';
import image2213 from '@/assets/student-courses-images/2213.jpg';
import Loader from './../components/UI/Loader';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { axiosPrivate } from '@/apis/axios';
import useAuthProvider from '@/hooks/useAuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { FaBookOpen } from "react-icons/fa";
import { FaArrowLeft } from 'react-icons/fa';


// Default images array for fallback
const defaultImages = [image234, image176744, image2149, image2213];

const CourseEnrolledSection = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const navigate = useNavigate();
  const {
    auth: { user },
  } = useAuthProvider();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const res = await axiosPrivate.get(`progress/user/${user._id}`);
        const data = res.data.data;
        console.log(data);
        
        // Transform the backend data to match the expected format
        const transformedCourses = data.courses.map((courseProgress, index) => {
          const course = courseProgress.courseId;
          return {
            id: course._id,
            title: course.title,
            description: course.description,
            category: course.category,
            educatorName: course.educatorName,
            // Use course image if available, otherwise fallback to default images
            src: course.image || defaultImages[index % defaultImages.length],
            progress: courseProgress.completionPercentage,
            isCompleted: courseProgress.isCompleted,
            enrolledAt: courseProgress.enrolledAt,
            lastAccessedAt: courseProgress.lastAccessedAt,
            // Add other fields as needed by your CourseEnrolledCard component
            rating: 4.0, // Default rating since it's not in backend data
            duration: '4 hr', // Default duration since it's not in backend data
            users: 1000, // Default users since it's not in backend data
            chapters: courseProgress.sections.length,
            price: '#15,000.00', // Default price since it's not in backend data
          };
        });
        
        setCourses(transformedCourses);
      } catch (err) {
        console.log(err);
        toast.error('Failed to load enrolled courses');
      } finally {
        setLoading(false);
      }
    };

    if (user?._id) {
      fetchCourse();
    }
  }, [user?._id, axiosPrivate]);

  if (loading) return <Loader isLoading={loading} />;

  return (
    <div className="w-full">
      {/* Courses Grid */}
      <div className="px-8 pb-8">
        {courses.length === 0 ? (
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md flex flex-col items-center">
              <div className="mb-4">
              <FaBookOpen className='text-primary-500 text-7xl'/>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">No Enrolled Courses Found</h2>
              <p className="text-gray-600 mb-6">
                You haven't enrolled in any courses yet. Start learning today!
              </p>
              <button 
                onClick={() => navigate('/courses')}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center"
              >
                <FaArrowLeft className="mr-2" />
                Start Learning
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {courses.map((course) => (
              <CourseEnrolledCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseEnrolledSection;