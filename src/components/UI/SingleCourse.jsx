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
    <div className="flex w-full max-w-[349px] flex-col gap-4">
      <img
        src={course.image === '' ? `${course.image}` : `${defaultCourse}`}
        alt={course.title}
        className="w-full object-cover"
      />

      <div className="flex w-full items-center gap-4">
        <div className="w-4/5">
          <small>{course.title} </small>
          <h4>{course.description?.slice(0, 20) + ' ...'}</h4>
        </div>
        <div className="ga-2 flex flex-col">
          <button
            className="text-heading cursor-pointer bg-gray-300 p-1.5 font-medium"
            onClick={() => {
              handleEditCourse(course._id);
            }}
          >
            Edit
          </button>
          <button
            className="bg-red-600 text-white"
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
