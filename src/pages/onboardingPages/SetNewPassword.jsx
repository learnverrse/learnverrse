import { axiosInstance } from '@/apis/axios';
import { banners } from '@/components/details';
import { toggleState } from '@/components/helperFunctions';
import HomeLogo from '@/components/UI/HomeLogo';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const SetNewPassword = () => {
  // for password vissibility
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  //   button ref
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    password: yup
      .string()
      .min(8, 'Password must be at least 6 characters')
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
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  //   axios private with refresh tokens attached
  const axiosPrivate = useAxiosPrivate();

  const submit = async (data) => {
    const email = localStorage.getItem('learnVerrse-email') || '';

    const payload = {
      email,
      password: data.confirmPassword,
    };

    try {
      buttonRef.current.innerHTML = 'Reseting.... Please wait';
      const newPasswordResponse = await axiosPrivate.post(
        import.meta.env.VITE_RESET_PASSWORD,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      toast.success(newPasswordResponse?.data?.message || 'success');
      navigate('/SignIn');

      localStorage.removeItem('learnVerrse-email');
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      buttonRef.current.innerHTML = 'Reset Password';
    }
  };
  return (
    <div className="flex h-screen w-full gap-20 overflow-hidden">
      {/*  <!-- Leftside  --> */}
      <div className="hidden lg:block">
        <img
          className="h-full object-contain"
          src={banners}
          alt="Illustration of students studying"
        />
      </div>

      {/*  <!-- Rightside  --> */}
      <div className="flex w-full flex-col items-center justify-center p-8 md:w-1/2">
        <div className="w-full max-w-md">
          {/*  <!-- logo --> */}
          <div className="mb-8 flex flex-col items-center justify-center">
            <HomeLogo />
          </div>
          {/*   <!-- form heading --> */}
          <div className="w-full">
            <h1 className="mb-2 text-center text-4xl font-bold">
              Reset Password
            </h1>
            <p className="mb-8 text-center text-gray-500">
              Kindly enter your new password
            </p>

            {/*  <!-- form fields --> */}
            <form
              onSubmit={handleSubmit(submit)}
              id="reset-password-form"
              className="flex flex-col gap-5"
            >
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

              <div className="mb-4">
                <div className="mb-2 flex items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M5 8L7 10L11 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ml-2 text-sm">
                    Must be 8 characters long
                  </span>
                </div>
                <div className="mb-2 flex items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M5 8L7 10L11 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ml-2 text-sm">
                    Must have 1 uppercase and 1 lowercase
                  </span>
                </div>
                <div className="mb-2 flex items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M5 8L7 10L11 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ml-2 text-sm">
                    Must have at least one special symbol
                  </span>
                </div>
              </div>
              <button
                type="submit"
                ref={buttonRef}
                className="w-full cursor-pointer rounded-xl bg-purple-700 px-8 py-3 text-white transition duration-300 hover:bg-purple-900"
              >
                Reset Password
              </button>
              <div className="text-center">
                <span className="text-gray-600">Remember your password? </span>
                <Link
                  to="/role-selector"
                  className="font-medium text-purple-700 hover:text-purple-900"
                >
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

export default SetNewPassword;
