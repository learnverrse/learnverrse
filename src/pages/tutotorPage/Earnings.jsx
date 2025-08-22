import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { GiTakeMyMoney } from "react-icons/gi";


const Earnings = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md items-center flex flex-col">
              <div className=" mb-4"><GiTakeMyMoney className='text-green-500 text-7xl' /></div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2"> Earnings  </h2>
              <p className="text-gray-600 mb-6">
                You're yet to start earning. Please check back later.
              </p>
              <button 
                onClick={() => navigate('/educator')}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center mx-auto"
              >
                <FaArrowLeft className="mr-2" />
                Back to Dashboard
              </button>
            </div>
          </div>
  )
}

export default Earnings