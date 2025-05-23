import React from 'react';
import { Check } from 'lucide-react';
import { courseData } from './courseData';
import CustomDropdown from './CustomDropdown';

export default function Sidebar({
  resourceType,
  setResourceType,
  selectedCourse,
  setSelectedCourse,
  course,
  selectedOutline,
  setSelectedOutline,
}) {
  return (
    <div className="relative h-screen w-full flex-shrink-0 border-r border-gray-200 md:w-1/3 md:border-r-4">
      {/* Fixed Header Section */}
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white p-6">
        <CustomDropdown
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />

        {/* Resource Type */}
        <div className="mb-4">
          <div className="font-inter mb-3 text-xl font-semibold">Resources</div>
          <div className="flex flex-row justify-between gap-3">
            {['video', 'pdf'].map((type) => (
              <label
                key={type}
                className="flex cursor-pointer items-center gap-3"
              >
                <div
                  onClick={() => setResourceType(type)}
                  className={`flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 ${
                    resourceType === type ? 'bg-purple-600 text-white' : ''
                  }`}
                >
                  {resourceType === type && (
                    <Check className="h-4 w-4 text-white" />
                  )}
                </div>
                <span className="text-sm capitalize">
                  {type === 'pdf' ? 'PDF Slides' : 'Video'}
                </span>
              </label>
            ))}
          </div>
        </div>

        <hr className="w-full rounded border-4 border-gray-200" />
      </div>

      {/* Scrollable Course Outline */}
      <div className="h-[calc(100vh-200px)] overflow-y-auto p-6">
        <h3 className="font-inter mb-4 text-2xl font-semibold">
          Course Outline
        </h3>
        <ul className="space-y-5 text-sm text-gray-700">
          {course.outlines.map((item, index) => (
            <li key={index} className="font-inter text-sm font-semibold">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="outline"
                  checked={selectedOutline === item}
                  onChange={() => setSelectedOutline(item)}
                  className="h-5 w-5 appearance-none rounded-full border border-gray-400 checked:border-purple-600 checked:bg-purple-600"
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
