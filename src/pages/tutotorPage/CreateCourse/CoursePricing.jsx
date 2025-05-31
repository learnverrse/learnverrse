import React from 'react'
import CreateCourseNav from '@/components/UI/CreateCourseNav'


const CoursePricing = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col px-6 py-2'>
        <CreateCourseNav />

        <form action="" className='space-y-6'>

            <p className='text-sm text-gray-500'>Create and define what your course is all about  </p>
            <div className="space-y-3">
                <h3 className='text-lg font-semibold mb-4'>Pricing Options</h3>
                <label htmlFor="" className="flex items-center space-x-3 cursor-pointer" >
                    <input type="radio" name="pricing" id="" className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500 "/>
                    <span className="font-medium">Free</span>
                </label>
                <label htmlFor="" className="flex items-center space-x-3 cursor-pointer" >
                    <input type="radio" name="pricing" id="" className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500 "/>
                    <span className="font-medium">Paid</span>
                </label>
            </div>
            <div>
                <label htmlFor="" className='ml-4'>Set Price</label>
                <input type="text" className='w-full px-4 py-3 border mt-2 border-gray-400 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' />
            </div>
             <div>
                <label htmlFor="" className='ml-4'>Discount <span className='text-gray-400'>(Optional)</span></label>
                <input type="text" className='w-full px-4 py-3 border mt-2 border-gray-400 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' />
            </div>
             <div>
                <label htmlFor="" className='ml-4'>Enrollement Cap <span className='text-gray-400'>(Optional)</span></label>
                <input type="text" className='w-full px-4 py-3 border mt-2 border-gray-400 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' />
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-4'>Pricing Options</h3>
                <label htmlFor="" className="flex items-center space-x-3 cursor-pointer" >
                    <input type="checkbox" name="" id="" className="w-6 h-6 md:w-4 md:h-4"/>
                    <span> I confirm that all course content complies with learnverse guidelines.</span>
                </label>
            </div>
            {/* Buttons */}
            <div className=' mt-12 flex justify-end'>
                <button type='submit'className='bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700'>Save as Draft</button>
            </div>
            <div className=' mt-4 flex justify-end'>
                <button type='submit'className='bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700'>Publish</button>
            </div>

        </form>
    </div>
  )
}

export default CoursePricing