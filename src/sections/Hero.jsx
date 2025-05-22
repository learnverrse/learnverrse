import React from 'react';
import {
  heroImg,
  navLinks,
  radialGradient,
  search,
} from '../components/details';
import { Link, useNavigate } from 'react-router';
import Button from '../components/UI/Button';
import { FaBars } from 'react-icons/fa';
import HomeLogo from '../components/UI/HomeLogo';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <header className="container min-h-screen bg-white">
      {/* navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-x-2">
          {/* logo */}
          <HomeLogo />

          {/* navlinks */}
          <div className="hidden md:ml-4 lg:flex">
            {navLinks.map(({ name, path }, index) => (
              <Link className="nav-links" to={`${path}`} key={index}>
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* search input */}
        <div className="relative mx-4 hidden w-full max-w-md lg:block">
          <input
            type="text"
            placeholder="Discover Courses To Learn"
            className="w-full rounded-full border border-gray-300 px-4 py-2 pl-10 focus:ring-2 focus:ring-purple-700 focus:outline-none"
          />

          <img
            src={search}
            alt="Search icon"
            className="absolute top-1/2 left-3 -translate-y-1/2 transform cursor-pointer"
          />
        </div>

        {/* buttons */}
        <div className="gap-4 md:flex">
          <div className="hidden items-center space-x-4 md:flex">
            <Button
              active={false}
              label={'login'}
              fun={() => {
                navigate('/SignIn');
              }}
            />

            <Button
              active={true}
              label={'join us now'}
              fun={() => {
                navigate('/Sign-up');
              }}
            />
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200 hover:bg-gray-300 focus:ring-2 focus:ring-purple-700 focus:outline-none lg:hidden">
            <FaBars />
          </button>
        </div>
      </nav>

      {/* hero section */}

      <div className="container mx-auto px-6">
        <div className="flex w-full flex-col items-center justify-between text-center lg:flex-row lg:text-start">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h1 className="mb-4 text-5xl font-bold capitalize md:text-7xl">
              Where curious minds meet{' '}
              <span className="text-purple-700">expert</span> guides.
            </h1>

            <p className="mt-8 mb-8 flex max-w-lg text-lg text-black">
              Fuel your curiosity with guidance from experts who’ve walked the
              path—learn deeply, grow confidently, and turn potential into
              progress.
            </p>

            <div className="z-20 flex justify-center space-x-4 lg:justify-start">
              <Button label={'see plans'} active={true} fun={() => {}} />

              <Button
                label="Access your course"
                active={false}
                fun={() => navigate('/learning')}
              />
            </div>
          </div>

          {/* img */}
          <div className="pointer-events-none flex justify-center md:w-1/2">
            <img
              src={heroImg}
              alt="register now!!!"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none fixed bottom-0 -mb-24 w-full">
        <img
          src={radialGradient}
          alt="purple gradient"
          className="w-full object-contain"
        />
      </div>
    </header>
  );
};

export default Hero;
