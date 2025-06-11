import { axiosInstance } from '@/apis/axios';
import { useRef } from 'react';
import HomeLogo from '@/components/UI/HomeLogo';
import { banner } from '@/components/details';
import { banners } from '@/components/details';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
const ForgotPassword = () => {
  const navigate = useNavigate();
  const btnRef = useRef(null);

  const emailRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem('learnVerrse-email', emailRef.current.value);
    btnRef.current.innerHTML = 'Sending Mail...';
    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL + import.meta.env.VITE_FORGOT_PASSWORD}`,
        { email: emailRef.current.value },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      console.log(response.data);
      toast.success(response.data.message);
      navigate('/otp-reset-password');
    } catch (error) {
      console.log(error.response.data);
      if (error.message === 'Network Error') {
        toast.error('Network Error: Please check your internet connection');
      } else if (error.response.data) {
        toast.error(error.response?.data?.message || 'Something went wrong');
      } else {
        toast.error('An error occurred, please try again');
      }
    } finally {
      btnRef.current.innerHTML = 'Continue';
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="mr-24 hidden lg:block">
        <img
          className="h-full object-contain"
          src={banners}
          alt="Illustration of students studying"
        />
      </div>

      <div className="flex w-full flex-col items-center justify-center px-6 lg:w-1/2 lg:px-24">
        <div className="scroll-container w-full max-w-md space-y-8 overflow-y-auto px-2.5 py-7">
          <div className="mb-8 flex justify-center">
            <HomeLogo />
          </div>

          <div className="mt-16">
            <h2 className="mb-8 text-center text-4xl font-medium text-[#121212]">
              Forgot Password
            </h2>
            <p className="mt-1 text-center leading-6 text-[#3D3D3D]">
              Enter the email address you used to create your account to receive
              instructions on how to reset your password
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-[#121212]">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                required
                placeholder="Enter your email"
                className="mt-1 w-full rounded-md border border-none bg-[#F5F7FA] px-4 py-3 focus:ring-2 focus:ring-[#6D28D2] focus:outline-none"
              />
            </div>

            <button
              ref={btnRef}
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="w-full rounded-md bg-[#6D28D2] py-2 text-white hover:bg-purple-700"
            >
              Continue
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            {' '}
            Remember your password?
            <Link to="/SignIn" className="text-[#6D28D2] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
