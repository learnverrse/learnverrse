import React, { useState } from 'react';
import { Check, ChevronDown, ChevronRight } from 'lucide-react';

export default function Sidebar({
  resourceType,
  setResourceType,
  selectedCourse,
  course,
  selectedOutline,
  setSelectedOutline,
}) {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };
  return (
    <div className="relative h-full w-full flex-shrink-0 border-r border-gray-200 md:w-1/3 md:border-r-4 flex flex-col">
      {/* Fixed Header Section */}
      <div className="flex-shrink-0 border-b border-gray-200 bg-white p-6">
        {/* Course Title Display */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2">
            {selectedCourse}
          </h2>
        </div>

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
      <div className="flex-1 overflow-y-auto p-6">
        <h3 className="font-inter mb-4 text-2xl font-semibold">
          Course Outline
        </h3>
        
        {/* Render sections as dropdowns */}
        <div className="space-y-4">
          {Object.entries(course.sections).map(([sectionName, items]) => (
            <div key={sectionName} className="border border-gray-200 rounded-lg">
              {/* Section Header - Clickable */}
              <button
                onClick={() => toggleSection(sectionName)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg transition-colors"
              >
                <h4 className="font-inter text-lg font-bold text-gray-800 text-left">
                  {sectionName}
                </h4>
                {expandedSections[sectionName] ? (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                )}
              </button>
              
              {/* Section Content - Collapsible */}
              {expandedSections[sectionName] && (
                <div className="p-4 pt-2 bg-white border-t border-gray-200">
                  <ul className="space-y-3">
                    {items.map((item, index) => (
                      <li key={index} className="font-inter text-sm font-semibold">
                        <label className="flex cursor-pointer items-center gap-3 p-2 hover:bg-purple-50 rounded transition-colors">
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
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}