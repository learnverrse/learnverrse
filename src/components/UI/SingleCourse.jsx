import React from 'react';
import { defaultCourse } from '../details';

const SingleCourse = ({ course }) => {
  const handleDeleteCourse = (id) => {
    console.log(id);
  };
  return (
    <div className="flex w-full max-w-[349px] flex-col gap-4" key={course._id}>
      <img
        src={course.image === '' ? course.image : `${defaultCourse}`}
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
            onClick={() => {}}
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
