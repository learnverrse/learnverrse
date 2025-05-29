import React from 'react'
import { MdChevronRight } from 'react-icons/md'

const CreateCourseNav = () => {
  return (
    <>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Create Course</h1>
        
        {/* Progress Steps */}
        <div className="flex items-center space-x-8 mb-12 flex-wrap gap-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
            <span className="text-gray-900 font-medium">Course Information</span>
            <MdChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
            <span className="text-purple-600 font-medium">Course content</span>
            <MdChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
            <span className="text-gray-600 font-medium">Assessment</span>
            <MdChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-medium">4</div>
            <span className="text-gray-600 font-medium">Pricing & Publish</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateCourseNav