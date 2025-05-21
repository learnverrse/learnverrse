import React, { useState, useRef } from 'react';
import { banner } from '../components/details';
import HomeLogo from '../components/UI/HomeLogo';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import { toggleState } from '../components/helperFunctions';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { axiosInstance } from '@/apis/axios';
import { toast } from 'react-toastify';
import useAuthProvider from '@/hooks/useAuthProvider';

const SignIn = () => {
  const { setAuth } = useAuthProvider();
  // toggle password state
  const [showPassword, setShowPassword] = useState(true);

  // form validation logic
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('please provide a valid email ')
      .required('email is required'),
    password: yup
      .string()
      .min(6)
      .min(6, 'Password must be at least 6 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(
        /[@$!%*?&]/,
        'Password must contain at least one special character @$!%*?&'
      )
      .required('password is required'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // data to be sent to backend

  const buttonRef = useRef(null);
  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };

    try {
      buttonRef.current.innerHTML = 'Please wait';

      console.log(
        `endpoint: ${import.meta.env.VITE_API_URL + import.meta.env.VITE_LOGIN}`
      );
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL + import.meta.env.VITE_LOGIN}`,
        payload,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      console.log(response.data);
      // setting global auth state
      setAuth({
        user: response.data.data,
        token: response.data.token,
      });
      toast.success('Login successful');

      toast(response.data.message);
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An error occurred, please try again');
      }
    } finally {
      buttonRef.current.innerHTML = 'Login';
    }
  };

  return (
    <section className="flex h-screen w-full gap-20 overflow-hidden">
      <div className="hidden lg:block">
        <img
          className="h-full object-contain"
          src={banner}
          alt="Illustration of students studying"
        />
      </div>

      <div className="flex w-full flex-col items-center justify-center px-6 lg:w-1/2 lg:px-24">
        <div className="scroll-container w-full max-w-lg space-y-8 overflow-y-auto px-2.5 py-7">
          <div className="flex justify-center">
            <HomeLogo />
          </div>

          <div>
            <h2 className="text-center text-4xl font-medium text-[#121212]">
              Welcome Back
            </h2>
            <p className="mt-1 text-center leading-6 text-[#3D3D3D]">
              Enter your email and password to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-[#121212]" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                placeholder="azzez@emmanuel.com"
                className="mt-1 w-full rounded-md border border-none bg-[#F5F7FA] px-4 py-3 focus:ring-2 focus:ring-[#6D28D2] focus:outline-none"
              />
              {errors.email && (
                <p className="mt-2 text-xs leading-[18px] text-[#C82828]">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="">
              <label className="block text-[#121212]" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'password' : 'text'}
                  {...register('password')}
                  id="password"
                  placeholder="Enter your password"
                  className="mt-1 w-full rounded-md border border-none bg-[#F5F7FA] px-4 py-3 focus:ring-2 focus:ring-[#6D28D2] focus:outline-none"
                />
                {showPassword ? (
                  <FaEye
                    onClick={() => {
                      toggleState(setShowPassword);
                    }}
                    size={20}
                    className="absolute top-1/2 right-3 -translate-1/2 cursor-pointer text-gray-400"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => {
                      toggleState(setShowPassword);
                    }}
                    size={20}
                    className="absolute top-1/2 right-3 -translate-1/2 cursor-pointer text-gray-400"
                  />
                )}
                {errors.password && (
                  <p className="mt-2 text-xs leading-[18px] text-[#C82828]">
                    {errors.password?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 text-[#121212]">
                <input type="checkbox" className="cursor-pointer" />
                <span>Remember me</span>
              </label>
              <Link
                to="/ForgotPassword"
                className="text-[#6D28D2] hover:underline"
              >
                Forgot Password
              </Link>
            </div>

            <button
              ref={buttonRef}
              type="submit"
              className="w-full cursor-pointer rounded-md bg-[#6D28D2] py-2 text-white hover:bg-purple-700"
            >
              Sign In
            </button>

            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-center space-x-2 rounded-md border py-2"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="h-5 w-5"
                alt="Google"
              />
              <span>Sign In with Google</span>
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            Don’t have an account?
            <Link
              className="font-semibold text-[#6D28D2] hover:underline"
              to="/Sign-up"
            >
              {' '}
              Sign Up{' '}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
