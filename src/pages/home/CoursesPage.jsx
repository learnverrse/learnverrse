import React from 'react';
import { useSearchParams } from 'react-router';
import HeaderNav from '@/components/UI/HeaderNav';
import Footer from '@/components/UI/footer';
import CoursesSection from '@/components/UI/CourseSection';

const CoursesPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  return (
    <div className=" min-h-screen">
      <HeaderNav />
     <div className='bg-purple-200 mt-4'>
         <div className="container mx-auto px-4 py-6 text-center">
        <h2 className="mb-2 text-6xl font-bold">
          Learn<span className="text-purple-600">verse</span> Courses
        </h2>
        <p className=" text-gray-800 font-medium">
          Fuel your curiosity with guidance from experts who've walked the
          path—learn <br />deeply, grow confidently, and turn potential into progress.
        </p>
        {searchQuery && (
          <p className="mt-2 text-purple-700 font-medium">
            Search results for "<span className="font-semibold">{searchQuery}</span>"
          </p>
        )}
      </div>
      <div className="container mx-auto px-4 py-4">
        <CoursesSection searchQuery={searchQuery} />
      </div>
     </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;