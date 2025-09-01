import React from 'react';
import { defaultCourse } from '../details';
import { useNavigate } from 'react-router';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';

const SingleCourse = ({ course }) => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  const handleEditCourse = async (id) => {
    navigate(`/educator/upload-course/${id}`);
  };
  const handleDeleteCourse = async (id) => {
    const confirmDelete = window.confirm(
      'Do you really want to delete this course?'
    );

    if (!confirmDelete) {
      return;
    }
    // delete logic
    else {
      try {
        const response = await axiosPrivate.delete(
          `${import.meta.env.VITE_DELETE_COURSE}/${id}`,
          course
        );

        toast.success(response?.data.message);
        queryClient.invalidateQueries(['allCourses']);
      } catch (error) {
        toast.error('failed to delete course');
      }
    }
  };
  return (
   <div className="flex w-full max-w-[349px] basis-full flex-col gap-4 sm:basis-[47%] lg:basis-[31%] bg-white rounded-lg shadow-md overflow-hidden">
  <div className="relative">
    <img
      src={course.image === '' ? defaultCourse : course.image}
      alt={course.title}
      className="w-full h-48 object-cover"
    />
    
    {/* Overlay for draft courses */}
    {course.status !== 'PUBLISHED' && (
      <div className="absolute inset-0 bg-gray-900/75 bg-opacity-50"></div>
    )}
    
    {/* Status badge positioned on top right of image */}
    <div className="absolute top-3 right-3 z-10">
      <span 
        className={`px-2 py-1 text-sm font-semibold rounded ${
          course.status === 'PUBLISHED' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}
      >
        {course.status === 'PUBLISHED' ? 'PUBLISHED' : 'DRAFT'}
      </span>
    </div>
  </div>

  <div className="p-4">
    <div className="mb-4">
      <h3 className="text-gray-800 text-md font-bold">{course.title}</h3>
      <p className="text-sm font-medium text-gray-600 mt-1">
        {course.description?.slice(0, 20) + '...'}
      </p>
    </div>
    
    <div className="flex gap-2">
      <button
        className="flex-1 px-4 py-2 bg-primary-500 hover:bg-primary-400 text-white font-medium rounded-md cursor-pointer"
        onClick={() => {
          handleEditCourse(course._id);
        }}
      >
        Edit
      </button>
      <button
        className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-800 text-white font-medium rounded-md cursor-pointer"
        onClick={() => handleDeleteCourse(course._id)}
      >
        Delete
      </button>
    </div>
  </div>
</div>
  );
};

export default SingleCourse;
