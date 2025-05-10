import React, { useState } from 'react';
import { logo } from '../components/details';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router';

const SignUp = () => {
  const [regAs, setRegAs] = useState('student');
  return (
    <div className="flex h-screen max-h-screen items-center justify-between overflow-hidden">
      <div className="hidden basis-[44%] overflow-hidden rounded-r-3xl lg:block">
        <img
          src="src/assets/Sign-up Images/banner.png"
          alt="Signup banner image"
          className="h-full w-full"
        />
      </div>

      <div className="scrollbarnone flex h-dvh min-h-screen basis-full flex-col items-center justify-center overflow-y-auto pt-16 lg:basis-[52%]">
        <div className="flex flex-col items-center justify-center gap-4 pt-16">
          <img src={logo} alt="Learnverrse Logo" />
          <div className="flex rounded-4xl bg-[#F5F7FA] p-2">
            <button
              className={` ${regAs === 'student' ? 'bg-[#6D28D2] text-white' : ''} cursor-pointer rounded-3xl px-3 py-1.5 text-base font-medium md:px-5 md:py-2.5`}
              onClick={() => {
                setRegAs('student');
              }}
            >
              Register as a Student
            </button>
            <button
              className={`${regAs === 'tutor' ? 'cursor-copy bg-[#6D28D2] text-white' : ''} cursor-pointer rounded-3xl px-3 py-1.5 text-base font-medium md:px-5 md:py-2.5`}
              onClick={() => {
                setRegAs('tutor');
              }}
            >
              Register as an Educator
            </button>
          </div>
          <h1 className="mb-4 flex justify-center text-4xl font-medium">
            Sign Up with Email
          </h1>
        </div>

        <div>
          <form action="" className="flex w-full flex-col gap-4 md:gap-6">
            <div className="w-[90vw] md:w-[430px]!">
              <label
                htmlFor="name"
                className="mb-2 text-base leading-6 font-normal text-[#121212]"
              >
                Name
              </label>
              <br />
              <input
                type="text"
                id="name"
                className="form-field custom-input w-full rounded-xl bg-[#F5F7FA] px-4 py-3.5 text-sm leading-5 text-[#121212] focus:bg-[#f5f7fa] focus:outline-[#6D28D2]"
                name="Name"
                placeholder="Enter your Name"
                required
              />
              <p
                id="errorNameText"
                className="mt-2 hidden text-xs leading-[18px] text-[#C82828]"
              >
                This name has been taken
              </p>
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="mb-2 text-base leading-6 font-normal text-[#121212]"
              >
                Email
              </label>
              <br />
              <input
                type="email"
                className="form-field custom-input w-full rounded-xl bg-[#F5F7FA] px-4 py-3.5 text-sm leading-5 text-[#121212] focus:bg-[#f5f7fa] focus:outline-[#6D28D2] md:w-[430px]"
                name="Email"
                placeholder="Enter your email"
                required
              />
              <p
                id="errorEmailText"
                className="mt-2 hidden text-xs leading-[18px] text-[#C82828]"
              >
                Please enter a valid Email
              </p>
              <p
                id="emailUsedText"
                className="mt-2 hidden text-xs leading-[18px] text-[#C82828]"
              >
                This email has already been registered
              </p>
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 text-base leading-6 font-normal text-[#121212]"
              >
                Password
              </label>
              <br />
              <div className="relative flex items-center">
                <input
                  type="password"
                  className="form-field custom-input w-full rounded-xl bg-[#F5F7FA] px-4 py-3.5 text-sm leading-5 text-[#121212] focus:bg-[#f5f7fa] focus:outline-[#6D28D2] md:w-[430px]"
                  name="Password"
                  placeholder="Enter your password"
                  required
                />
                <FaEye
                  size={20}
                  className="absolute top-1/2 right-3 -translate-1/2 cursor-pointer text-gray-400"
                />
              </div>
              <p
                id="weakPassword"
                className="mt-2 hidden text-xs leading-[18px] text-[#C82828]"
              >
                Weak password
              </p>
            </div>

            <div className="mt-3 flex flex-row gap-1.5">
              <input
                type="checkbox"
                name=""
                className="cursor-pointer"
                id="remember-me"
              />
              <p className="text-sm leading-5 text-[#6B6B6B]">Remember me</p>
            </div>

            <button
              className="mt-5 w-full cursor-pointer rounded-xl bg-[#6D28D2] px-4 py-3 text-base leading-6 font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#CEB7F0] md:w-[430px]"
              disabled
            >
              Sign Up
            </button>
            <div className="flex items-center justify-center gap-6">
              <img
                src="src/assets/Sign-up Images/Line 1.svg"
                className="hidden md:block"
                alt=""
              />
              <p>OR</p>
              <img
                src="src/assets/Sign-up Images/Line 1.svg"
                className="hidden md:block"
                alt=""
              />
            </div>
            <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#6B6B6B] px-4 py-3 text-base leading-6 font-semibold text-[#121212] md:w-[430px]">
              <img
                src="src/assets/Sign-up Images/flat-color-icons_google.svg"
                alt=""
                className="w-[5%] px-0 py-0"
              />
              Sign Up with Google
            </button>
          </form>

          <div className="mt-4 flex items-center justify-center">
            <p className="text-base leading-6 font-medium text-[#3E3E3E]">
              Already have an account?{' '}
              <Link className="text-[#6D28D2]" to={'/SignIn'}>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
