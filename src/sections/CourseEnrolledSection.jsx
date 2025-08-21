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

const displayedCourses = [
  {
    id: 2,
    title: 'Product Management Essentials',
    rating: 4.3,
    duration: '5 hr',
    users: 1800,
    chapters: 12,
    description:
      'Our team would will work closely with you to understand your strengths and experiences.',
    category: 'Product Design',
    src: image176744,
    price: '#15,000.00',
    progress: 100,
  },

  {
    id: 5,
    title: 'Frontend Development with React',
    rating: 4.6,
    duration: '6 hr',
    users: 1300,
    chapters: 24,
    description:
      'Master React and build interactive UIs with reusable components and state management.',
    category: 'Web Development',
    src: image234,
    price: '#15,000.00',
    progress: 80,
  },
  {
    id: 6,
    title: 'Backend Development with Node.js',
    rating: 4.5,
    duration: '5.5 hr',
    users: 2500,
    chapters: 32,
    description:
      'Build scalable APIs and backend systems using Node.js and Express.',
    category: 'Web Developement',
    src: image2213,
    price: '#15,000.00',
    progress: 0,
  },
  {
    id: 8,
    title: 'Introduction to Cybersecurity',
    rating: 4.2,
    duration: '3.5 hr',
    users: 6300,
    chapters: 23,
    description:
      'Learn the fundamentals of cybersecurity, threats, and how to secure systems.',
    category: 'Web Devlopement',
    src: image2149,
  },
  {
    id: 9,
    title: 'UI/UX Design Principles',
    rating: 4.5,
    duration: '4 hr',
    users: 6300,
    chapters: 25,
    description:
      'Learn the core principles of user interface and user experience design.',
    category: 'Product Design',
    src: image2213,
    progress: 50,
  },
  {
    id: 11,
    title: 'Version Control with Git & GitHub',
    rating: 4.7,
    duration: '2.5 hr',
    users: 300,
    chapters: 15,
    description:
      'Track changes, collaborate with teams, and manage projects using Git and GitHub.',
    category: 'Web Developement',
    src: image234,
    progress: 70,
  },
];

const CourseEnrolledSection = () => {
  //     if (isLoading) return <Loader isLoading={isLoading} />;
  //   if (error)
  //     return (
  //       <div>
  //         <p>Error loading courses.</p>
  //         <button onClick={() => refetch()}>Refetch</button>
  //       </div>
  //     );

  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState([]);
  const axioxPrivate = useAxiosPrivate();
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
        setCourse(data);
      } catch (err) {
        console.log(err);
        toast.error('Failed to load course');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, []);

  return (
    <div className="w-full">
      {/* Courses Grid */}
      <div className="px-8 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {displayedCourses.map((course) => (
            <CourseEnrolledCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseEnrolledSection;
