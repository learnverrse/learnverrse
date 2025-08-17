import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import HomeLogo from '@/components/UI/HomeLogo';
import Button from '@/components/UI/Button';
import { FaBars, FaTimes } from 'react-icons/fa';
import { search, navLinks, radialGradient, heroImg } from '../details';
import useAuthProvider from '@/hooks/useAuthProvider';

const HeaderNav = ({ bgColor = 'bg-white' }) => {
  const navigate = useNavigate();
  const { auth } = useAuthProvider();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const searchBar = async (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <header className={`container mx-auto ${bgColor}`}>
        {/* navbar */}
        <nav className="b border-primary-500 m-auto mt-2 flex w-full items-center justify-between rounded-full border-2 px-6 py-4 lg:max-w-7xl">
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
          <div className="relative mx-4 hidden w-full max-w-md md:block md:max-w-3xs lg:max-w-xs">
            <input
              type="search"
              placeholder="Discover Courses To Learn"
              onChange={(e) => search(e)}
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
            <div className="hidden items-center space-x-4 lg:flex">
              {auth ? (
                <Button
                  active={true}
                  label={'Dashboard'}
                  fun={() =>
                    navigate(
                      `${auth.user?.role === 'LEARNER' ? '/learner-dashboard' : '/educator'}`
                    )
                  }
                />
              ) : (
                <>
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
                </>
              )}
            </div>

            <div className="hidden md:block lg:hidden">
              {auth ? (
                <Button
                  active={true}
                  label={'Dashboard'}
                  fun={() =>
                    navigate(
                      `${auth.user?.role === 'LEARNER' ? '/learner-dashboard' : '/educator'}`
                    )
                  }
                />
              ) : (
                <Button
                  active={true}
                  label={'join us now'}
                  fun={() => {
                    navigate('/role-selector');
                  }}
                />
              )}
            </div>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200 hover:bg-gray-300 focus:ring-2 focus:ring-purple-700 focus:outline-none md:hidden"
              onClick={toggleMobileMenu}
            >
              <FaBars />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-in Menu */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 transform bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-6">
          <HomeLogo />
          <button
            onClick={closeMobileMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 hover:bg-purple-200 focus:ring-2 focus:ring-purple-700 focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu Content */}
        <div className="space-y-6 p-6">
          {/* Search Input */}
          <div className="relative">
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

          {/* Navigation Links */}
          <div className="space-y-4">
            {navLinks.map(({ name, path }, index) => (
              <Link
                className="block border-b border-purple-100 py-2 text-lg font-medium text-gray-700 capitalize last:border-b-1 hover:text-purple-700"
                to={`${path}`}
                key={index}
                onClick={closeMobileMenu}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 pt-6">
            {auth ? (
              <Button
                active={true}
                label={'Dashboard'}
                fun={() =>
                  navigate(
                    `${auth.user?.role === 'LEARNER' ? '/learner-dashboard' : '/educator'}`
                  )
                }
              />
            ) : (
              <>
                <Button
                  active={false}
                  label={'login'}
                  fun={() => {
                    navigate('/SignIn');
                    closeMobileMenu();
                  }}
                />

                <Button
                  active={true}
                  label={'join us now'}
                  fun={() => {
                    navigate('/role-selector');
                    closeMobileMenu();
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
