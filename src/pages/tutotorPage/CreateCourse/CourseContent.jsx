import React from 'react'
import CreateCourseNav from '@/components/UI/CreateCourseNav'

const CourseContent = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col px-6 py-2'>
        <CreateCourseNav />

        <form className='space-y-6'>
            <div>
                <label htmlFor="">Chapter Title</label>
                <input type="text" className='w-full px-4 py-3 border mt-2 border-gray-400 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' />
            </div>
            <div>
                <label htmlFor="">Chapter Subtitle</label>
                <input type="text" className='w-full px-4 py-3 border mt-2 border-gray-400 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' />
            </div>
            <div>
                <label htmlFor="">Chapter Description</label>
                <textarea name="" id="chapterDescription" rows={12} className='w-full px-6 py-3 border mt-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none'></textarea>
                <p className='text-sm text-gray-400 mt-2 ml-4'>/2000 Characters</p>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="" className='text-sm font-medium text-gray-700 mb-2'>Choose File</label>
                 <input type="file" className="hidden"id="fileUpload"/>
                 <label htmlFor="fileUpload" className="w-full px-4 py-2 border border-gray-400 rounded-full text-gray-700 cursor-pointer">
                    Choose file
                </label>
            </div>

            <div className=' mt-12 flex justify-end'>
                <button type='submit'className='bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700'>Save & Continue </button>
            </div>

            
        </form>
    </div>
  )
}

export default CourseContent