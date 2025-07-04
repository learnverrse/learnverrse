import React, { useEffect, useState } from 'react';
import CreateCourseNav from '@/components/UI/CreateCourseNav';
import { FaCirclePlus } from 'react-icons/fa6';
import Button from '@/components/UI/Button';
import { useNavigate, useParams } from 'react-router';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { toast } from 'react-toastify';
import Loader from '@/components/UI/Loader';

const Quiz = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const axiosPrivate = useAxiosPrivate();

  const [isLoading, setIsLoading] = useState(false);

  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setIsLoading(true);
        const res = await axiosPrivate.get(
          `${import.meta.env.VITE_GET_COURSE_BY_ID}/${courseId}`
        );
        const data = res.data.data;
        setCourse(data);
        
      } catch (err) {
        toast.error('Failed to load course');
       
      } finally {
        setIsLoading(false);
      }
    };

    if (courseId) fetchCourse();
  }, [courseId]);

  const goBack = () => {
    // Navigate to step 2 - adjust the route based on your routing structure
    navigate(`/educator/upload-course-content/${courseId}`);
  };

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col bg-gray-50 px-6 py-2 overflow-y-auto">
      <CreateCourseNav currentStep={3} />
      {isLoading ? (
        <Loader info="Loading quizz details..." isLoading={isLoading} />
      ) : (
        <form action="" className="space-y-6 pb-8">
          <div>
            <label htmlFor="">Quiz Title</label>
            <input
              type="text"
              className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="">Quiz Description</label>
            <input
              type="text"
              className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="">Number Of Quiz Question</label>
            <input
              type="text"
              className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="mb-2 text-sm font-medium text-gray-700"
            >
              Choose File
            </label>
            <input type="file" className="hidden" id="fileUpload" />
            <label
              htmlFor="fileUpload"
              className="flex w-full cursor-pointer items-center gap-4 rounded-full border border-gray-400 px-4 py-2 text-gray-700"
            >
              <FaCirclePlus className="h-6 w-6 text-black" /> Add Question
            </label>
          </div>
          <div className="mt-12 flex justify-between items-center gap-4">
            <button
              type="button"
              className="rounded-full bg-gray-600 px-8 py-3 font-medium text-white hover:bg-gray-700"
              onClick={goBack}
            >
              Back
            </button>
            <Button
              active={true}
              label="save & continue"
              fun={(e) => {
                e.preventDefault();
                navigate('/educator/pricing/' + courseId);
              }}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Quiz;