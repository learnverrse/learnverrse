import React, { useState } from 'react';
import HomeLogo from '@/components/UI/HomeLogo';
import { useNavigate } from 'react-router';

const RoleSelector = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-200 via-white to-purple-200 p-8">
      <div className="mb-12 w-full max-w-fit items-center space-y-8">
        <HomeLogo />
      </div>

      <div className="mb-8 space-y-6 text-center">
        <p className="text-md max-w-md text-gray-800">
          Fuel your curiosity with guidance from experts who've walked the
          path—learn deeply, grow confidently, and turn potential into progress.
        </p>

        <h1 className="text-lg font-bold">
          Join us now and elevate your learning experience
        </h1>
      </div>

      <div className="space-y-6">
        <button
          onClick={() => setSelectedRole('student')}
          className={`w-full rounded-lg px-30 py-3 text-sm font-medium transition-all duration-200 ${
            selectedRole === 'student'
              ? 'bg-purple-600 text-white ring-2 ring-purple-600'
              : 'border-primary-400 cursor-pointer border-2 bg-purple-200 text-black hover:bg-purple-400'
          }`}
        >
          As A Student
        </button>
        <button
          onClick={() => setSelectedRole('tutor')}
          className={`w-full rounded-lg px-30 py-3 text-sm font-medium transition-all duration-200 ${
            selectedRole === 'tutor'
              ? 'bg-purple-600 text-white ring-2 ring-purple-600'
              : 'border-primary-400 cursor-pointer border-2 bg-purple-200 text-black hover:bg-purple-400'
          }`}
        >
          As An Educator
        </button>

        <button
          className="mt-12 w-full transform cursor-pointer rounded-lg bg-purple-700 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-600"
          onClick={() =>
            selectedRole && navigate('/sign-up', { state: { selectedRole } })
          }
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default RoleSelector;
