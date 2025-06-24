import React from 'react'
import { Link, useNavigate } from 'react-router';
import HomeLogo from '@/components/UI/HomeLogo';
import Button from '@/components/UI/Button';
import { FaBars } from 'react-icons/fa';
import {search, navLinks, radialGradient, heroImg,} from '../details';


const HeaderNav = ({ bgColor = 'bg-white' }) => {
  const navigate = useNavigate();

  return (
   <header className={`container mx-auto ${bgColor}`}>
        {/* navbar */}
        <nav className="m-auto mt-2 flex w-full lg:max-w-7xl items-center justify-between px-6 py-4 b border-2 border-primary-500 rounded-full">
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
          <div className="relative mx-4 hidden w-full md:max-w-xs max-w-md lg:block">
            <input
              type="text"
              placeholder="Discover Courses To Learn"
              className="w-full rounded-full border border-black px-4 py-2 pl-10 focus:ring-2 focus:ring-purple-700 focus:outline-none"
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
                  navigate('/role-selector');
                }}
              />
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200 hover:bg-gray-300 focus:ring-2 focus:ring-purple-700 focus:outline-none lg:hidden">
              <FaBars />
            </button>
          </div>
        </nav>
      </header>
  )
}

export default HeaderNav