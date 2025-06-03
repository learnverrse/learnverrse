import React, { useState } from 'react'
import HomeLogo from '@/components/UI/HomeLogo';

const RoleSelector = () => {

    const [selectedRole, setSelectedRole] = useState(null)
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-200 via-white to-purple-200 flex flex-col items-center justify-center p-8'>

        <div className='max-w-fit w-full items-center space-y-8 mb-12'>
             <HomeLogo />
        </div>

        <div className='space-y-6 mb-8 text-center'>
            <p className='text-gray-800 text-md max-w-md'>
                Fuel your curiosity with guidance from experts who've walked the 
                path—learn deeply, grow confidently, and turn potential into 
                progress.
            </p>

            <h1 className='text-lg font-bold'>
                Join us now and elevate your learning experience
            </h1>

        </div>

        <div className='space-y-6'>
            <button onClick={() => setSelectedRole('student')} 
                className={`w-full py-3 px-30 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedRole === 'student' 
                  ? 'bg-purple-600 text-white ring-2 ring-purple-600' 
                  : 'bg-purple-200 text-black hover:bg-purple-400 border-2 border-primary-400'
              }`}>
                As A Student
            </button>
            <button onClick={() => setSelectedRole('educator')}
                className={`w-full py-3 px-30 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedRole === 'educator' 
                  ? 'bg-purple-600 text-white ring-2 ring-purple-600' 
                  : 'bg-purple-200 text-black hover:bg-purple-400 border-2 border-primary-400'
              }`}>
                As An Educator
            </button>

            <button 
            className="w-full py-3 px-6 rounded-lg text-sm font-medium transition-all duration-200 mt-12 bg-purple-700 hover:bg-purple-600 shadow-lg transform hover:-translate-y-0.5 text-white cursor"
          >
            Continue
          </button>
        </div>

    </div>
  )
}

export default RoleSelector