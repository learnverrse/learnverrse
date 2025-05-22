// CustomDropdown.jsx
import React, { useState } from 'react';
import { courseData } from './courseData';
import { ChevronDown, Check } from 'lucide-react';

export default function CustomDropdown({ selectedCourse, setSelectedCourse }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (courseName) => {
    setSelectedCourse(courseName);
    setIsOpen(false);
  };

  return (
    <div className="relative mb-6 w-full">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-xl border-2 border-purple-600 bg-white px-4 py-3 text-base font-medium text-purple-700 shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none md:text-lg"
      >
        {selectedCourse}
        <ChevronDown className="h-5 w-5" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full overflow-hidden rounded-xl border border-purple-200 bg-white shadow-lg">
          {Object.keys(courseData).map((courseName) => (
            <li
              key={courseName}
              onClick={() => handleSelect(courseName)}
              className={`flex cursor-pointer items-center justify-between px-4 py-3 text-sm hover:bg-purple-50 md:text-base ${
                selectedCourse === courseName
                  ? 'bg-purple-100 font-semibold text-purple-700'
                  : 'text-gray-800'
              }`}
            >
              {courseName}
              {selectedCourse === courseName && <Check className="h-4 w-4" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
