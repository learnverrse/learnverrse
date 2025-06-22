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

  // Get all items in order for navigation
  const getAllItems = () => {
    const items = [];
    Object.entries(course.sections).forEach(([sectionName, sectionItems]) => {
      sectionItems.forEach(item => {
        items.push({ item, section: sectionName });
      });
    });
    return items;
  };

  const allItems = getAllItems();
  const currentIndex = allItems.findIndex(({ item }) => item === selectedOutline);
  
  // Navigation functions
  const goToNext = () => {
    if (currentIndex < allItems.length - 1) {
      const nextItem = allItems[currentIndex + 1];
      setSelectedOutline(nextItem.item);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      const previousItem = allItems[currentIndex - 1];
      setSelectedOutline(previousItem.item);
    } else if (currentIndex === -1 && allItems.length > 0) {
      // If no item is selected, go to first item
      setSelectedOutline(allItems[0].item);
    }
  };

  // Check if current item is the last in its section
  const isLastInSection = () => {
    if (currentIndex === -1) return false;
    const currentItem = allItems[currentIndex];
    const currentSection = course.sections[currentItem.section];
    const itemIndexInSection = currentSection.indexOf(currentItem.item);
    return itemIndexInSection === currentSection.length - 1;
  };

  // Check if there's a next item
  const hasNext = currentIndex < allItems.length - 1;
  const hasPrevious = currentIndex > 0 || (currentIndex === -1 && allItems.length > 0);

  return (
    <div className="min-h-screen w-full bg-gray-100 p-6 md:p-2">
      <div className="mx-auto flex w-full max-w-7xl flex-col rounded-2xl bg-white shadow-2xl h-[calc(100vh-2rem)] md:h-[calc(100vh-6rem)] md:flex-row">
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
          goToNext={goToNext}
          goToPrevious={goToPrevious}
          hasNext={hasNext}
          hasPrevious={hasPrevious}
          isLastInSection={isLastInSection()}
        />
      </div>
    </div>
  );
}