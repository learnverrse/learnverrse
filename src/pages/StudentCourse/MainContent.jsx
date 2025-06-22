import React from 'react';
import ResourcePreview from './ResourcePreview';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

export default function MainContent({ 
  resourceType, 
  course, 
  selectedOutline, 
  goToNext, 
  goToPrevious, 
  hasNext, 
  hasPrevious, 
  isLastInSection 
}) {
  const titleToShow = selectedOutline || course.mainContentTitle;

  return (
    <div className="flex w-full flex-col md:w-2/3 h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto p-6 md:px-10">
        <h1 className="font-inter mb-4 text-3xl font-semibold">{titleToShow}</h1>

        <ResourcePreview resourceType={resourceType} />

        <p className="font-inter text-black-600 text-xl font-semibold mb-6">
          {course.description}
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">
            {selectedOutline ? `Current Topic: ${selectedOutline}` : 'Course Content'}
          </h3>
          <p className="mb-4">
            {selectedOutline 
              ? `You are currently learning about "${selectedOutline}". This topic will cover all the essential concepts and practical applications you need to understand.`
              : 'Select a topic from the course outline to begin your learning journey. Each lesson is carefully crafted to build upon the previous one.'
            }
          </p>
          <p className="mb-4">
            This course will take you through a comprehensive journey of learning. You'll start with the fundamentals and gradually progress to more advanced topics.
          </p>
          <p className="mb-4">
            Each lesson is carefully crafted to build upon the previous one, ensuring you have a solid foundation before moving forward.
          </p>
          <p className="mb-4">
            By the end of this course, you'll have gained practical skills and theoretical knowledge that you can apply in real-world scenarios.
          </p>
          <p className="mb-4">
            The interactive elements and hands-on exercises will help reinforce your learning and make the experience more engaging.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mb-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="mb-4">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* Fixed Navigation Section */}
      <div className="flex-shrink-0 border-t border-gray-200 bg-white p-6 md:px-10">
        {/* Navigation Buttons */}
        <div className="flex w-full flex-row justify-between space-x-4">
          <button 
            onClick={goToPrevious}
            disabled={!hasPrevious}
            className={`flex items-center gap-2 cursor-pointer rounded-lg px-4 py-2 text-white transition ${
              hasPrevious 
                ? 'bg-gray-500 hover:bg-gray-600' 
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          
          {hasNext ? (
            <button 
              onClick={goToNext}
              className="flex items-center gap-2 cursor-pointer rounded-lg bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700"
            >
              {isLastInSection ? 'Start Quiz' : 'Next'}
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button 
              onClick={() => alert('Course completed! 🎉')}
              className="flex items-center gap-2 cursor-pointer rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
            >
              Complete Course
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* PDF Download Button - Only shown when PDF is selected */}
        {resourceType === 'pdf' && (
          <div className="mt-4 flex justify-center">
            <a
              href="/file.pdf"
              download
              className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-purple-600 px-6 py-2 text-purple-600 transition hover:bg-purple-50"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
}