import { certificateBanner } from '@/components/details';
import Button from '@/components/UI/Button';
import CoursesSection from '@/components/UI/CourseSection';
import React from 'react';
import { FaSearch } from 'react-icons/fa';



const Certificate = () => {
 

  return (
    <div className="h-screen w-full">
      <div className="flex flex-col items-center justify-between p-8 md:flex-row">
        <div className="pb-8 md:pb-0">
          <h1 className="mb-1 text-2xl font-semibold">My Certificate</h1>
        </div>
      </div>

        <div className='flex flex-col items-center px-4 lg:px-0'>
            <img src={certificateBanner} alt="" className='' />
            <h2 className='text-2xl font-bold mt-6'>No certifications yet</h2>
            <p className='text-sm font-semibold text-[#BDBDBD] text-center my-4'>You haven’t earned any certificate yet. start a learning path to earn your first certificate</p>
            <Button
              label="Browse learning path"
              active={false}
            />
        </div>
    </div>
    
  );
};

export default Certificate;
