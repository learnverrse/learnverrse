import React from 'react';
import CreateCourseNav from '@/components/UI/CreateCourseNav';

const CoursePricing = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 px-6 py-2">
      <CreateCourseNav currentStep={4} />

      <form action="" className="space-y-6">
        <p className="text-sm text-gray-500">
          Create and define what your course is all about{' '}
        </p>
        <div className="space-y-3">
          <h3 className="mb-4 text-lg font-semibold">Pricing Options</h3>
          <label
            htmlFor=""
            className="flex cursor-pointer items-center space-x-3"
          >
            <input
              type="radio"
              name="pricing"
              id=""
              className="h-4 w-4 border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <span className="font-medium">Free</span>
          </label>
          <label
            htmlFor=""
            className="flex cursor-pointer items-center space-x-3"
          >
            <input
              type="radio"
              name="pricing"
              id=""
              className="h-4 w-4 border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <span className="font-medium">Paid</span>
          </label>
        </div>
        <div>
          <label htmlFor="" className="ml-4">
            Set Price
          </label>
          <input
            type="text"
            className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="" className="ml-4">
            Discount <span className="text-gray-400">(Optional)</span>
          </label>
          <input
            type="text"
            className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="" className="ml-4">
            Enrollement Cap <span className="text-gray-400">(Optional)</span>
          </label>
          <input
            type="text"
            className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Pricing Options</h3>
          <label
            htmlFor=""
            className="flex cursor-pointer items-center space-x-3"
          >
            <input
              type="checkbox"
              name=""
              id=""
              className="h-6 w-6 md:h-4 md:w-4"
            />
            <span>
              {' '}
              I confirm that all course content complies with learnverse
              guidelines.
            </span>
          </label>
        </div>
        {/* Buttons */}
        <div className="mt-12 flex justify-end">
          <button
            type="submit"
            className="rounded-full bg-purple-600 px-8 py-3 font-medium text-white hover:bg-purple-700"
          >
            Save as Draft
          </button>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="rounded-full bg-purple-600 px-8 py-3 font-medium text-white hover:bg-purple-700"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default CoursePricing;
