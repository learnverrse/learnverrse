import React from 'react';
import { MdChevronRight } from 'react-icons/md';

const CreateCourseNav = ({ currentStep = 1 }) => {
  const steps = [
    { id: 1, name: 'Course Information' },
    { id: 2, name: 'Course Content' },
    { id: 3, name: 'Assessment' },
    { id: 4, name: 'Pricing & Publish' },
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Create Course</h1>

      <div className="mb-12 flex flex-wrap items-center space-x-8 gap-y-4">
        {steps.map(({ id, name }, index) => (
          <div className="flex items-center space-x-2" key={id}>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${currentStep === id ? 'bg-purple-600 text-white' : 'bg-gray-900 text-white'} `}
            >
              {id}
            </div>
            <span
              className={`font-medium ${
                currentStep === id ? 'text-purple-600' : 'text-gray-900'
              }`}
            >
              {name}
            </span>

            {index < steps.length - 1 && (
              <MdChevronRight className="h-4 w-4 text-gray-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateCourseNav;
