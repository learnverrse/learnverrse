import React from 'react';
import HeaderNav from '@/components/UI/HeaderNav';
import Footer from '@/components/UI/footer';
import CoursesSection from '@/components/UI/CourseSection';

const CoursesPage = () => {
  return (
    <div className=" min-h-screen">
      <HeaderNav />
     <div className='bg-purple-200 mt-4'>
         <div className="container mx-auto px-4 py-6 text-center">
        <h2 className="mb-2 text-6xl font-bold">
          Learn<span className="text-purple-600">verrse</span> Courses
        </h2>
        <p className=" text-gray-800 font-medium">
          Fuel your curiosity with guidance from experts who’ve walked the
          path—learn <br />deeply, grow confidently, and turn potential into progress.
        </p>
      </div>
      <div className="container mx-auto px-4 py-4">
        <CoursesSection />
      </div>
     </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
