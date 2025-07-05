import { FiChevronDown, FiChevronsDown } from 'react-icons/fi';

import {
  logo2,
  footerLine,
  linkedIn,
  faceBook,
  instagram,
  xTwitter,
} from '../details';
import { useState } from 'react';

function Footer() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  return (
    <footer className="w-full bg-[#121212] py-10 lg:py-20">
      <div className="container mx-auto w-[90%] md:w-[95%] lg:w-[90%]">
        <div className="flex flex-col items-start justify-between md:flex-row">
          <div className="order-1 mb-10 flex flex-col space-y-6 text-white md:hidden">
            <img src={logo2} alt="logo" />
          </div>

          <div className="order-5 mb-6 flex flex-col space-y-6 text-white md:order-none md:mb-0 md:w-[20%] md:text-[13px] lg:w-auto lg:text-base">
            <img
              src={logo2}
              alt="logo"
              className="hidden md:block md:w-[80%] lg:w-full"
            />
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>

          <div className="order-2 flex w-full flex-col space-y-6 text-white md:order-none md:w-[20%] lg:w-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold md:text-[15px] lg:text-xl">
                For Learner
              </h2>
              <button
                className="md:hidden"
                onClick={() => toggleDropdown('learner')}
              >
                <FiChevronDown
                  className={`${openDropdown === 'learner' ? 'rotate-180' : ''} transition-transform`}
                />
              </button>
            </div>
            <div
              className={`${openDropdown === 'learner' ? 'flex' : 'hidden'} mb-4 flex-col space-y-6 md:mb-0 md:flex md:text-[13px] lg:text-base`}
            >
              <a href="#">Browse Courses</a>
              <a href="#">How It Works</a>
              <a href="#">Pricing</a>
              <a href="#">Help Center</a>
            </div>
          </div>

          <div className="order-3 flex w-full flex-col space-y-6 text-white md:order-none md:w-[20%] lg:w-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold md:text-[15px] lg:text-xl">
                For Educator
              </h2>
              <button
                className="md:hidden"
                onClick={() => toggleDropdown('educator')}
              >
                <FiChevronDown
                  className={`${openDropdown === 'educator' ? 'rotate-180' : ''} transition-transform`}
                />
              </button>
            </div>
            <div
              className={`${openDropdown === 'educator' ? 'flex' : 'hidden'} mb-4 flex-col space-y-6 md:mb-0 md:flex md:text-[13px] lg:text-base`}
            >
              <a href="#">Become an educator</a>
              <a href="#">Educator Dashboard</a>
              <a href="#">Community</a>
            </div>
          </div>

          <div className="order-4 flex w-full flex-col space-y-6 text-white md:order-none md:w-[20%] lg:w-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold md:text-[15px] lg:text-xl">
                Legal & Support
              </h2>
              <button
                className="md:hidden"
                onClick={() => toggleDropdown('legal')}
              >
                <FiChevronDown
                  className={`${openDropdown === 'legal' ? 'rotate-180' : ''} transition-transform`}
                />
              </button>
            </div>
            <div
              className={`${openDropdown === 'legal' ? 'flex' : 'hidden'} mb-4 flex-col space-y-6 md:mb-0 md:flex md:text-[13px] lg:text-base`}
            >
              <a href="#">Forms of Services</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookies settings</a>
            </div>
          </div>
          <div className="order-6 flex flex-col space-y-6 text-white md:order-none">
            <h2 className="text-xl font-bold md:text-[15px] lg:text-xl">
              Contact Us
            </h2>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter your email address"
              className="placeholder:text-ourGray outline-primary-800 bg-white p-2 text-black md:max-w-sm lg:w-auto"
            ></input>
          </div>
        </div>

        <div className="mt-16 w-full">
          <img src={footerLine} alt="" />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between space-y-5 text-white md:flex-row md:space-y-0">
          <div className="flex items-center space-x-3">
            <a href="#">
              <img src={linkedIn} alt="" className="" />
            </a>
            <a href="#">
              <img src={faceBook} alt="" />
            </a>
            <a href="#">
              <img src={instagram} alt="" />
            </a>
            <a href="#">
              <img src={xTwitter} alt="" />
            </a>
          </div>
          <div>
            <p className="text-sm md:text-base">
              2025{' '}
              <span className="font-bold">
                Learn<span className="text-primary-600">verrse</span>
              </span>
              . All rights Reserved.
            </p>
          </div>
          <div className="hidden items-center space-x-3 md:flex">
            <div className="border-r-1 px-3">
              <a href="#">Privacy Policy</a>
            </div>
            <div>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
