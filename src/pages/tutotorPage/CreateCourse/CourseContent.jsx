import React from 'react';
import CreateCourseNav from '@/components/UI/CreateCourseNav';
import { FaCirclePlus } from 'react-icons/fa6';
import Button from '@/components/UI/Button';
import { useNavigate } from 'react-router';

const CourseContent = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 px-6 py-2">
      <CreateCourseNav currentStep={2} />

      <label
        htmlFor="fileUpload"
        className="mb-6 flex w-full cursor-pointer items-center gap-4 rounded-full border border-gray-400 px-4 py-2 text-purple-700"
      >
        <FaCirclePlus className="text-purple h-6 w-6" /> Add Chapter
      </label>

      <form className="space-y-6">
        <div>
          <label htmlFor="">Chapter Title</label>
          <input
            type="text"
            className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="">Chapter Subtitle</label>
          <input
            type="text"
            className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="">Chapter Description</label>
          <textarea
            name=""
            id="chapterDescription"
            rows={12}
            className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-6 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <p className="mt-2 ml-4 text-sm text-gray-400">/2000 Characters</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="mb-2 text-sm font-medium text-gray-700">
            Choose File
          </label>
          <input type="file" className="hidden" id="fileUpload" />
          <label
            htmlFor="fileUpload"
            className="w-full cursor-pointer rounded-full border border-gray-400 px-4 py-2 text-gray-700"
          >
            Choose file
          </label>
        </div>

        <div className="mt-12 flex justify-end">
          <Button
            label={'Save & Continue'}
            active={true}
            fun={(e) => {
              e.preventDefault();
              navigate('/educator/pricing');
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default CourseContent;
