import HomeLogo from '@/components/UI/HomeLogo';
import React, { useRef, useState } from 'react';

const OtpPage = () => {
  const inputRefs = useRef([]);
  const btnRef = useRef(null);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (value, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

  const handleInput = (e, index) => {
    console.log(e.key);

    if (
      e.key === 'Backspace' &&
      e.target.value === '' &&
      inputRefs.current.length > 0
    ) {
      inputRefs.current[index - 1].focus();
    } else if (e.target.value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (inputRefs.current.every((el) => el.value !== '')) {
      btnRef.current.click();
    }
  };

  return (
    <main className="flex h-screen items-center justify-center pt-1 pb-1 sm:pt-0 sm:pb-0">
      <div className="flex h-full w-screen flex-col overflow-hidden rounded-lg bg-white shadow-2xl md:flex-row">
        {/*  <!-- Left Side Panel with Purple Background --> */}
        <div className="hidden h-full basis-[45%] items-center justify-center bg-purple-600 p-8 md:flex md:rounded-tr-[40px] md:rounded-br-[40px]">
          <img
            src="assets/Hand holding mobile phone with check mark.svg"
            alt="Phone Image"
            className="h-80 w-80 object-contain"
          />
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center space-y-6 p-10 text-center md:w-1/2">
          <div className="flex flex-row items-center justify-center align-middle">
            <HomeLogo />
          </div>

          {/*    <!-- Right Side - Form --> */}
          <div className="flex h-[90%] flex-col items-center justify-center space-y-6 text-center">
            <h2 className="font-inter text-3xl font-semibold text-gray-800">
              Verify your Email
            </h2>
            <p className="font-inter text-base font-normal text-[#6B6B6B]">
              Enter the 6 digit code we sent to your email to complete reset
              your password
            </p>

            {/*   <!-- Code Inputs --> */}
            <div className="flex justify-center space-x-2">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyUp={(e) => handleInput(e, index)}
                  maxLength="1"
                  className="focus:border-primary-500 h-14 w-12 rounded-md border border-gray-300 bg-[#D9D9D9] text-center text-lg focus:outline-none"
                />
              ))}
            </div>

            {/*   <!-- Continue Button --> */}
            <button
              ref={btnRef}
              disabled={true}
              className="mt-4 flex cursor-pointer items-center justify-center gap-3 rounded-[12px] px-10 py-3 hover:bg-purple-700 hover:text-white sm:w-3/4"
            >
              Continue
            </button>

            {/*  <!-- Resend Text --> */}
            <p className="font-inter text-sm text-gray-500">
              Didn't receive code?
              <a
                href="#"
                className="font-inter text-purple-600 hover:underline"
              >
                Resend code
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OtpPage;
