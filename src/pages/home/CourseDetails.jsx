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
} from 'lucide-react';
import { CourseHolder } from '@/components/details';
import { useNavigate, useParams } from 'react-router';
import { axiosInstance } from '@/apis/axios';
import { toast } from 'react-toastify';
import Naira from '@/components/utils/Naira';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';

const CourseDetailPage = () => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const { courseId } = useParams();

  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});

  async function Enroll(courseId) {
    try {
      const res = await axiosPrivate.post('payments/initialize', courseId);

      const { success, data } = res.data;

      if (success) window.location.href = data.authorizationUrl;
    } catch (error) {
      toast.error('something went wrong');
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`courses/public/${courseId}`);
        const data = res.data.data;
        console.log(data);
        setCourse(data);
      } catch (err) {
        console.log(err);
        toast.error('Failed to load course');
      } finally {
        setLoading(false);
      }
    };

    if (courseId) fetchCourse();
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
            className={`h-5 w-5 ${
              index < fullStars
                ? 'fill-yellow-400 text-yellow-400'
                : index === fullStars && hasHalfStar
                  ? 'fill-yellow-400/50 text-yellow-400'
                  : 'text-gray-300'
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

            {/* What You'll Learn */}
            <div className="rounded-2xl border border-purple-100 bg-white p-8">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                What you'll learn
              </h2>
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
                                <span className="ml-2 text-sm text-gray-500">
                                  ({chapter.type})
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
                    onClick={() => Enroll(course._id)}
                    className="mb-6 w-full transform rounded-xl bg-purple-600 px-6 py-4 font-bold text-white transition-all duration-200 hover:scale-105 hover:bg-purple-700"
                  >
                    Enroll Now
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
