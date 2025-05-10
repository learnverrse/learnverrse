import React from 'react';
import { logo, resetFrame } from '../components/details';
import { FaEye } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';

const ResetPassword = () => {
  return (
    <div className="flex h-dvh max-h-screen">
      {/* <!-- Leftside  --> */}
      <div className="hidden h-full w-1/2 overflow-hidden rounded-r-2xl md:flex">
        <img
          src={resetFrame}
          alt="Signup banner"
          className="h-full w-full object-cover"
        />
      </div>

      {/* <!-- Rightside  --> */}
      <div className="flex w-full flex-col items-center justify-center overflow-y-auto p-2 md:w-1/2">
        <div className="w-full max-w-md">
          {/* <!-- logo --> */}
          <div className="mb-16 flex flex-col items-center justify-center">
            <img src={logo} alt="Learnverrse Logo" />
          </div>
          {/* <!-- form heading --> */}
          <div className="w-full">
            <h1 className="mb-2 text-center text-4xl font-bold">
              Reset Password
            </h1>
            <p className="mb-8 text-center text-gray-500">
              Kindly enter your new password
            </p>

            {/* <!-- form fields --> */}
            <form className="flex flex-col gap-4">
              <div className="mb-5 w-full">
                <label
                  for="password"
                  className="mb-2 text-base leading-6 font-normal text-[#121212]"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    className="form-field custom-input w-full rounded-xl bg-[#F5F7FA] px-4 py-3.5 text-sm leading-5 text-[#121212] focus:bg-[#f5f7fa] focus:outline-[#6D28D2]"
                    name="Password"
                    placeholder="***************"
                    required
                  />
                  <FaEye
                    size={20}
                    className="absolute top-1/2 right-3 -translate-1/2 cursor-pointer text-gray-400"
                  />
                </div>
              </div>
              <div className="mb-5 w-full">
                <label
                  for="confirm-password"
                  className="mb-2 text-base leading-6 font-normal text-[#121212]"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    className="form-field custom-input w-full rounded-xl bg-[#F5F7FA] px-4 py-3.5 text-sm leading-5 text-[#121212] focus:bg-[#f5f7fa] focus:outline-[#6D28D2]"
                    name="ConfirmPassword"
                    placeholder="***************"
                    required
                  />
                  <FaEye
                    size={20}
                    className="absolute top-1/2 right-3 -translate-1/2 cursor-pointer text-gray-400"
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="mb-2 flex items-center">
                  <FaCircleCheck className="text-green-500" />
                  <span className="ml-2 text-sm text-green-500">
                    Must be 8 characters long
                  </span>
                </div>
                <div className="mb-2 flex items-center">
                  <FaCircleCheck className="text-green-500" />
                  <span className="ml-2 text-sm text-green-500">
                    Must have 1 uppercase and 1 lowercase
                  </span>
                </div>
                <div className="mb-2 flex items-center">
                  <FaCircleCheck className="text-green-500" />
                  <span className="ml-2 text-sm text-green-500">
                    Must have at least one special symbol
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-purple-700 px-8 py-3 text-white transition duration-300 hover:bg-purple-900"
              >
                Reset Password
              </button>
              <div className="text-center">
                <span className="text-gray-600">Remember your password? </span>
                <a
                  href="#"
                  className="font-medium text-purple-700 hover:text-purple-900"
                >
                  Sign In
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
