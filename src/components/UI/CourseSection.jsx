import React, { useState } from 'react';
import CourseCard from './CourseCard';
import image234 from '@/assets/student-courses-images/image234.png';
import image176744 from '@/assets/student-courses-images/176744.jpg';
import image2149 from '@/assets/student-courses-images/2149.jpg';
import image2213 from '@/assets/student-courses-images/2213.jpg';
import { axiosInstance } from '@/apis/axios';
import { useQuery } from '@tanstack/react-query';
import Loader from './Loader';

// const courses = [
//   {
//     id: 1,
//     title: 'Introduction To Product Design',
//     rating: 4.3,
//     duration: '5 hr',
//     description:
//       'Our team would will work closely with you to understand your strengths and experiences.',
//     badge: 'Premium',
//     src: image234,
//     price: '#15,000.00',
//   },
//   {
//     id: 2,
//     title: 'Product Management Essentials',
//     rating: 4.3,
//     duration: '5 hr',
//     description:
//       'Our team would will work closely with you to understand your strengths and experiences.',
//     badge: 'Free',
//     src: image176744,
//     price: '#15,000.00',
//   },
//   {
//     id: 3,
//     title: 'Advanced Product Management',
//     rating: 4.3,
//     duration: '5 hr',
//     description:
//       'Our team would will work closely with you to understand your strengths and experiences.',
//     badge: 'Free',
//     src: image2149,
//     price: '#15,000.00',
//   },
//   {
//     id: 4,
//     title: 'Product Management Fundamentals',
//     rating: 4.3,
//     duration: '5 hr',
//     description:
//       'Our team would will work closely with you to understand your strengths and experiences.',
//     badge: 'Premium',
//     src: image2213,
//   },
//   {
//     id: 5,
//     title: 'Frontend Development with React',
//     rating: 4.6,
//     duration: '6 hr',
//     description:
//       'Master React and build interactive UIs with reusable components and state management.',
//     badge: 'Premium',
//     src: image234,
//     price: '#15,000.00',
//   },
//   {
//     id: 6,
//     title: 'Backend Development with Node.js',
//     rating: 4.5,
//     duration: '5.5 hr',
//     description:
//       'Build scalable APIs and backend systems using Node.js and Express.',
//     badge: 'Free',
//     src: image2213,
//     price: '#15,000.00',
//   },
//   {
//     id: 7,
//     title: 'Database Design & SQL',
//     rating: 4.4,
//     duration: '4 hr',
//     description:
//       'Understand relational databases, write complex queries, and manage data effectively.',
//     badge: 'Free',
//     src: image234,
//     price: '#15,000.00',
//   },
//   {
//     id: 8,
//     title: 'Introduction to Cybersecurity',
//     rating: 4.2,
//     duration: '3.5 hr',
//     description:
//       'Learn the fundamentals of cybersecurity, threats, and how to secure systems.',
//     badge: 'Premium',
//     src: image2149,
//   },
//   {
//     id: 9,
//     title: 'UI/UX Design Principles',
//     rating: 4.5,
//     duration: '4 hr',
//     description:
//       'Learn the core principles of user interface and user experience design.',
//     badge: 'Free',
//     src: image2213,
//   },
//   {
//     id: 10,
//     title: 'Agile & Scrum for Teams',
//     rating: 4.3,
//     duration: '3 hr',
//     description:
//       'Master agile methodology and the Scrum framework to improve team productivity.',
//     badge: 'Premium',
//     src: image2149,
//   },
//   {
//     id: 11,
//     title: 'Version Control with Git & GitHub',
//     rating: 4.7,
//     duration: '2.5 hr',
//     description:
//       'Track changes, collaborate with teams, and manage projects using Git and GitHub.',
//     badge: 'Free',
//     src: image234,
//   },
//   {
//     id: 12,
//     title: 'Deploying Applications with Docker',
//     rating: 4.4,
//     duration: '4.5 hr',
//     description:
//       'Containerize and deploy your applications effectively using Docker.',
//     badge: 'Premium',
//     src: image2149,
//   },
// ];
const CoursesSection = ({ limitCourses }) => {
  async function fetchCourses() {
    const response = await axiosInstance.get(
      import.meta.env.VITE_GET_ALL_COURSES
    );
    console.log('Fetched courses:', response.data.data);
    return response.data.data;
  }

  const { data, isLoading, error, refetch } = useQuery(
    ['courses'],
    fetchCourses
  );

  if (isLoading) return <Loader isLoading={isLoading} />;
  if (error)
    return (
      <div>
        <p>Error loading courses.</p>
        <button onClick={() => refetch()}>Refetch</button>
      </div>
    );

  // Limit courses if specified
  const displayedCourses = limitCourses ? data.slice(0, limitCourses) : data;

  return (
    <div className="w-full">
      {/* Courses Grid */}
      <div className="px-8 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {displayedCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
