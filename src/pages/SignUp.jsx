import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import HomeLogo from '../components/UI/HomeLogo';
import { banner } from '../components/details';
import { toggleState } from '../components/helperFunctions';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const SignUp = () => {
  const [regAs, setRegAs] = useState('student');
  // for password vissibility
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  // form validation and handling

  const schema = yup.object().shape({
    fullName: yup.string().required('Your full name is required'),
    email: yup
      .string()
      .email('please provide a valid email ')
      .required('email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(
        /[@$!%*?&]/,
        'Password must contain at least one special character @$!%*?&'
      )
      .required('password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password must match')
      .required('please confirm password'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // function to send data to backend
  const onSubmit = (data) => {
    const dataTobackend = {
      role: regAs,
      fullName: data.fullname,
      email: data.email,
      password: data.confirmPassword,
    };
    const sub = JSON.stringify({
      dataTobackend,
    });
    alert(`data to be sent to backend : ${sub}`);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="mr-24 hidden lg:block">
        <img
          src={banner}
          alt="Signup banner image"
          className="h-full object-contain"
        />
      </div>

      <div className="scroll-container flex flex-col items-center justify-center px-6 lg:w-1/2 lg:px-24">
        <div className="mt-40 flex flex-col items-center justify-center gap-4 pt-16">
          <HomeLogo />
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-4 md:gap-6"
          >
            <div className="w-[90vw] md:w-[430px]!">
              <label
                htmlFor="Fullname"
                className="mb-2 text-base leading-6 font-normal text-[#121212]"
              >
                Full name
              </label>
              <br />
              <input
                type="text"
                id="name"
                className="form-field custom-input w-full rounded-xl bg-[#F5F7FA] px-4 py-3.5 text-sm leading-5 text-[#121212] focus:bg-[#f5f7fa] focus:outline-[#6D28D2]"
                name="Name"
                placeholder="Timi Ola"
                {...register('fullName')}
              />
              {errors.fullName && (
                <p className="mt-2 text-xs leading-[18px] text-[#C82828]">
                  {errors.fullName.message}
                </p>
              )}
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
                placeholder="mustaphaoge@gmail.com"
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-2 text-xs leading-[18px] text-[#C82828]">
                  {errors.email?.message}
                </p>
              )}
              {/* field for checking the if email exists */}
              <p
                id="emailUsedText"
                className="mt-2 hidden text-xs leading-[18px] text-[#C82828]"
              >
                This email has already been registered
              </p>
            </div>
            {/* password */}
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
                  type={showPassword ? 'password' : 'text'}
                  className="form-field custom-input w-full rounded-xl bg-[#F5F7FA] px-4 py-3.5 text-sm leading-5 text-[#121212] focus:bg-[#f5f7fa] focus:outline-[#6D28D2] md:w-[430px]"
                  name="Password"
                  placeholder="Enter your password"
                  {...register('password')}
                />
                {showPassword ? (
                  <FaEye
                    size={20}
                    onClick={() => {
                      toggleState(setShowPassword);
                    }}
                    className="absolute top-1/2 right-3 -translate-1/2 cursor-pointer text-gray-400"
                  />
                ) : (
                  <FaEyeSlash
                    size={20}
                    onClick={() => {
                      toggleState(setShowPassword);
                    }}
                    className="absolute top-1/2 right-3 -translate-1/2 cursor-pointer text-gray-400"
                  />
                )}
              </div>
              {errors.password && (
                <p className="mt-2 text-xs leading-[18px] text-[#C82828]">
                  {errors.password?.message}
                </p>
              )}
            </div>
            {/* confirm password */}
            <div>
              <label
                htmlFor="confirm"
                className="mb-2 text-base leading-6 font-normal text-[#121212]"
              >
                Confirm Password
              </label>
              <br />
              <div className="relative flex items-center">
                <input
                  type={showConfirmPassword ? 'password' : 'text'}
                  className="form-field custom-input w-full rounded-xl bg-[#F5F7FA] px-4 py-3.5 text-sm leading-5 text-[#121212] focus:bg-[#f5f7fa] focus:outline-[#6D28D2] md:w-[430px]"
                  name="Password"
                  placeholder="Enter your password"
                  {...register('confirmPassword')}
                />
                {showConfirmPassword ? (
                  <FaEye
                    size={20}
                    onClick={() => {
                      toggleState(setShowConfirmPassword);
                    }}
                    className="absolute top-1/2 right-3 -translate-1/2 cursor-pointer text-gray-400"
                  />
                ) : (
                  <FaEyeSlash
                    size={20}
                    onClick={() => {
                      toggleState(setShowConfirmPassword);
                    }}
                    className="absolute top-1/2 right-3 -translate-1/2 cursor-pointer text-gray-400"
                  />
                )}
              </div>

              {errors.confirmPassword && (
                <p className="mt-2 text-xs leading-[18px] text-[#C82828]">
                  {errors.confirmPassword?.message}
                </p>
              )}
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

            <input
              type="Submit"
              className="mt-5 w-full cursor-pointer rounded-xl bg-[#6D28D2] px-4 py-3 text-base leading-6 font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#CEB7F0] md:w-[430px]"
              value="Sign Up"
            />
          </form>
          <div className="my-6 flex items-center justify-center gap-6">
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
