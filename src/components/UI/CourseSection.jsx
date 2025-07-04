import React from 'react';
import CourseCard from './CourseCard';
import image234 from '@/assets/student-courses-images/image234.png';
import image176744 from '@/assets/student-courses-images/176744.jpg';
import image2149 from '@/assets/student-courses-images/2149.jpg';
import image2213 from '@/assets/student-courses-images/2213.jpg';

const CoursesSection = ({ limitCourses = null }) => {
  const courses = [
    {
      id: 1,
      title: 'Introduction To Product Design',
      rating: 4.3,
      duration: '5 hr',
      description:
        'Our team would will work closely with you to understand your strengths and experiences.',
      badge: 'Learnverrse',
      src: image234,
    },
    {
      id: 2,
      title: 'Product Management Essentials',
      rating: 4.3,
      duration: '5 hr',
      description:
        'Our team would will work closely with you to understand your strengths and experiences.',
      badge: 'Educator',
      src: image176744,
    },
    {
      id: 3,
      title: 'Advanced Product Management',
      rating: 4.3,
      duration: '5 hr',
      description:
        'Our team would will work closely with you to understand your strengths and experiences.',
      badge: 'Educator',
      src: image2149,
    },
    {
      id: 4,
      title: 'Product Management Fundamentals',
      rating: 4.3,
      duration: '5 hr',
      description:
        'Our team would will work closely with you to understand your strengths and experiences.',
      badge: 'Learnverrse',
      src: image2213,
    },
  ];

  // Limit courses if specified
  const displayedCourses = limitCourses ? courses.slice(0, limitCourses) : courses;

  return (
    <div className="w-full">
      {/* Courses Grid */}
      <div className="px-8 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {displayedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;