import React from 'react'
import CreateCourseNav from '@/components/UI/CreateCourseNav'
import { FaChevronDown } from "react-icons/fa6";

const CourseInformation = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col px-6 py-2'>
        <CreateCourseNav />

         <form className='space-y-6'>

            <p className='text-sm text-gray-400'>Create and define what your course is all about  </p>
            <div>
                <label htmlFor="">Course Title</label>
                <input type="text" className='w-full px-4 py-3 border mt-2 border-gray-400 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' />
            </div>
            <div>
                <label htmlFor="">Course Category</label>
                   <div className="relative mt-2">
                    <select 
          id="course-category"
          className="w-full px-4 py-3 border border-gray-400 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white pr-12"
        >
          <option value="">Select a category</option>
          <option value="web-development">Web Development</option>
          <option value="mobile-development">Mobile Development</option>
          <option value="data-science">Data Science</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
          <option value="business">Business</option>
                    </select>
                    <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                   </div>
            </div>
            <div>
                <label htmlFor="">Course Duration</label>
                <input type="text" className='w-full px-4 py-3 border mt-2 border-gray-400 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' />
            </div>
            <div>
                <label htmlFor="">Course Description</label>
                <textarea name="" id="chapterDescription" rows={12} className='w-full px-6 py-3 border mt-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none'></textarea>
                <p className='text-sm text-gray-400 mt-2 ml-4'>/2000 Characters</p>
            </div>

            <div className=' mt-12 flex justify-end'>
                <button type='submit'className='bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700'>Save & Continue </button>
            </div>

            
        </form>
    </div>
  )
}

export default CourseInformation