import React, { useState, useRef } from 'react';
import { resetFrame } from '../../components/details';
import { emailPages } from '../../components/details';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';
import HomeLogo from '../../components/UI/HomeLogo';
import { useForm } from 'react-hook-form';
import { toggleState } from '@/components/helperFunctions';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router';
import { axiosInstance } from '@/apis/axios';
import { toast } from 'react-toastify';

const ResetPassword = () => {
  // toggling password and text
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const schema = yup.object().shape({
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
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const passwordValue = watch('password');
  const isPasswordValid = passwordValue && !errors.password;

  const btnRef = useRef(null);
  // function to send form to backend
  const onSubmit = async (data) => {
    const email = localStorage.getItem('learnVerrse-email') || '';
    const payload = {
      password: data.confirmPassword,
      email,
    };

    try {
      btnRef.current.innerHTML = 'Resetting...';

      const response = await axiosInstance.post(
        import.meta.env.VITE_SET_NEW_PASSWORD,
        payload
      );

      toast.success(response.data.message);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || 'An error occurred');
    } finally {
      btnRef.current.innerHTML = 'Reset Password';
    }
  };

  return (
    <div className="flex h-dvh max-h-screen">
      {/* <!-- Leftside  --> */}
      <div className="hidden h-full w-1/2 overflow-hidden rounded-r-2xl md:flex">
        <img
          src={emailPages}
          alt="Signup banner"
          className="h-full w-full object-cover"
        />
      </div>

      {/* <!-- Rightside  --> */}
      <div className="flex w-full flex-col items-center justify-center overflow-y-auto p-2 md:w-1/2">
        <div className="w-full max-w-md">
          {/* <!-- logo --> */}
          <div className="mb-16 flex flex-col items-center justify-center">
            <HomeLogo />
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="mb-5 w-full">
                <label
                  for="password"
                  className="mb-2 text-base leading-6 font-normal text-[#121212]"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'password' : 'text'}
                    className="form-field custom-input h-full w-full rounded-xl bg-[#F5F7FA] px-4 py-3.5 text-sm leading-5 text-[#121212] focus:bg-[#f5f7fa] focus:outline-[#6D28D2]"
                    name="Password"
                    placeholder="***************"
                    {...register('password')}
                  />
                  {showPassword ? (
                    <FaEye
                      size={20}
                      onClick={() => {
                        toggleState(setShowPassword);
                      }}
                      className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400"
                    />
                  ) : (
                    <FaEyeSlash
                      size={20}
                      onClick={() => {
                        toggleState(setShowPassword);
                      }}
                      className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400"
                    />
                  )}
                </div>
                {errors.password && (
                  <p className="mt-2 text-xs leading-[18px] text-[#C82828]">
                    {errors.password?.message}
                  </p>
                )}
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
                    type={showConfirmPassword ? 'password' : 'text'}
                    className="form-field custom-input w-full rounded-xl bg-[#F5F7FA] px-4 py-3.5 text-sm leading-5 text-[#121212] focus:bg-[#f5f7fa] focus:outline-[#6D28D2]"
                    name="ConfirmPassword"
                    placeholder="***************"
                    {...register('confirmPassword')}
                  />
                  {showConfirmPassword ? (
                    <FaEye
                      size={20}
                      onClick={() => {
                        toggleState(setShowConfirmPassword);
                      }}
                      className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400"
                    />
                  ) : (
                    <FaEyeSlash
                      size={20}
                      onClick={() => {
                        toggleState(setShowConfirmPassword);
                      }}
                      className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400"
                    />
                  )}
                </div>
                {errors.confirmPassword && (
                  <p className="mt-2 text-xs leading-[18px] text-[#C82828]">
                    {errors.confirmPassword?.message}
                  </p>
                )}
              </div>
              <div
                className={`mb-4 ${isPasswordValid ? 'text-green-500' : 'text-gray-400'} `}
              >
                <div className="mb-2 flex items-center">
                  <FaCircleCheck className="" />
                  <span className="ml-2 text-sm">
                    Must be at least 6 digits long
                  </span>
                </div>
                <div className="mb-2 flex items-center">
                  <FaCircleCheck className="" />
                  <span className="ml-2 text-sm">Must have 1 uppercase</span>
                </div>
                <div className="mb-2 flex items-center">
                  <FaCircleCheck className="" />
                  <span className="ml-2 text-sm">
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
                <Link className="text-[#6D28D2]" to={'/SignIn'}>
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
