import React from 'react';
import { LuUserRound } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";
import { RiLock2Fill, RiInformationLine  } from "react-icons/ri";
import { IoMoonSharp, IoNotifications  } from "react-icons/io5";





const Settings = () => {
  return (
    <div className="h-[calc(100vh-80px)] w-full">
      <div className="flex flex-col items-center md:items-start justify-between p-8 ">
        <div className="pb-8 ">
          <h1 className="mb-1 text-2xl font-bold">Settings</h1>
        </div>
       
        <div className='w-full max-w-4xl mb-6 '>
             <h3 className='font-medium text-2xl'>Account</h3>
             <div className='mt-6 flex items-center justify-between space-x-3 bg-purple-100 p-4 rounded-md shadow-md '>
                <div className='flex gap-4 items-center'>
                    <LuUserRound  className='rounded-md bg-purple-300 p-2 text-5xl text-purple-800"'/>
                    <div>
                        <h4 className='font-bold text-2xl'>Profile</h4>
                        <p className='text-gray-400'>Manage your profile Information</p>
                    </div>
                </div>
                <FaChevronRight />
             </div>
             <div className='mt-6 flex items-center justify-between space-x-3 bg-purple-100 p-4 rounded-md shadow-md '>
                <div className='flex gap-4 items-center'>
                    <RiLock2Fill  className='rounded-md bg-purple-300 p-2 text-5xl text-purple-800"'/>
                    <div>
                        <h4 className='font-bold text-2xl'>Password</h4>
                        <p className='text-gray-400'>Change your password</p>
                    </div>
                </div>
                <FaChevronRight />
             </div>
        </div>

        <div className='w-full max-w-4xl mb-6 '>
             <h3 className='font-medium text-2xl'>Personal information</h3>
             <div className='mt-6 flex items-center justify-between space-x-3 bg-purple-100 p-4 rounded-md shadow-md '>
                <div className='flex gap-4 items-center'>
                    <RiInformationLine   className='rounded-md bg-purple-300 p-2 text-5xl text-purple-800"'/>
                    <div>
                        <h4 className='font-bold text-2xl'>Personal details</h4>
                        <p className='text-gray-400'>Manage your personal details</p>
                    </div>
                </div>
                <FaChevronRight />
             </div>
             
        </div>

        <div className='w-full max-w-4xl mb-6 '>
             <h3 className='font-medium text-2xl'>App settings</h3>
             <div className='mt-6 flex items-center justify-between space-x-3 bg-purple-100 p-4 rounded-md shadow-md '>
                <div className='flex gap-4 items-center'>
                    <IoMoonSharp  className='rounded-md bg-purple-300 p-2 text-5xl text-purple-800"'/>
                    <div>
                        <h4 className='font-bold text-2xl'>Display</h4>
                        <p className='text-gray-400'>Adjust mode</p>
                    </div>
                </div>
                <FaChevronRight />
             </div>
             <div className='mt-6 flex items-center justify-between space-x-3 bg-purple-100 p-4 rounded-md shadow-md '>
                <div className='flex gap-4 items-center'>
                    <IoNotifications   className='rounded-md bg-purple-300 p-2 text-5xl text-purple-800"'/>
                    <div>
                        <h4 className='font-bold text-2xl'>Notification</h4>
                        <p className='text-gray-400'>Manage your notification preference</p>
                    </div>
                </div>
                <FaChevronRight />
             </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
