import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { courseData } from './courseData';

export default function LearningPage() {
  const [selectedCourse, setSelectedCourse] = useState('Product Design');
  const [resourceType, setResourceType] = useState('video');
  const [selectedOutline, setSelectedOutline] = useState('');

  // Reset selectedOutline when course changes (optional)
  useEffect(() => {
    setSelectedOutline('');
  }, [selectedCourse]);

  const course = courseData[selectedCourse];

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4 md:px-12 md:py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:h-[calc(100vh-3rem)] md:flex-row">
        <Sidebar
          resourceType={resourceType}
          setResourceType={setResourceType}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          course={course}
          selectedOutline={selectedOutline}
          setSelectedOutline={setSelectedOutline}
        />
        <MainContent
          resourceType={resourceType}
          course={course}
          selectedOutline={selectedOutline}
        />
      </div>
    </div>
  );
}
