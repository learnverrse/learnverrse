import React from 'react'
import CreateCourseNav from '@/components/UI/CreateCourseNav'
import { FaCirclePlus } from "react-icons/fa6";



const Quiz = () => {
  return (
    <div>
        <CreateCourseNav />

        <form action="" className='space-y-6'>
            <div>
                <label htmlFor="">Quiz Title</label>
                <input type="text" className='w-full px-4 py-3 border mt-2 border-gray-400 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' />
            </div>
             <div>
                <label htmlFor="">Quiz Description</label>
                <input type="text" className='w-full px-4 py-3 border mt-2 border-gray-400 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' />
            </div>
            <div>
                <label htmlFor="">Number Of Quiz Question</label>
                <input type="text" className='w-full px-4 py-3 border mt-2 border-gray-400 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' />
            </div>
             <div className='flex flex-col'>
                <label htmlFor="" className='text-sm font-medium text-gray-700 mb-2'>Choose File</label>
                 <input type="file" className="hidden"id="fileUpload"/>
                 <label htmlFor="fileUpload" className="flex items-center gap-4 w-full px-4 py-2 border border-gray-400 rounded-full text-gray-700 cursor-pointer">
                  <FaCirclePlus className='w-6 h-6 text-black' />  Add Question
                </label>
            </div>
             <div className=' mt-12 flex justify-end'>
                <button type='submit'className='bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700'>Save & Continue </button>
            </div>
        </form>
    </div>
  )
}

export default Quiz