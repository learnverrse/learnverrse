import React, { useEffect, useState } from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import HomeLogo from '../components/UI/HomeLogo';
import { CgProfile } from 'react-icons/cg';
import SideBar from '../components/UI/SideBar';
import { Outlet } from 'react-router';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import useAuthProvider from '@/hooks/useAuthProvider';

const StudentLayout = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const {
    auth: { user },
  } = useAuthProvider();
  console.log(user);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 999) {
        setIsMediumScreen(true);
        setIsSidebarOpen(false);
      } else {
        setIsMediumScreen(false);
        setIsSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isMediumScreen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <header className="relative z-30 flex items-center justify-between px-2 py-4">
        {isMediumScreen ? (
          <FaBars
            size={25}
            onClick={toggleSidebar}
            className="cursor-pointer"
          />
        ) : (
          <HomeLogo />
        )}

        <div className="flex items-center gap-4">
          <IoIosNotificationsOutline />
          <CgProfile size={40} />
          <h3>{user?.name}</h3>
        </div>
      </header>

      <main className="relative flex-1">
        {/* Desktop Sidebar */}
        {!isMediumScreen && isSidebarOpen && (
          <SideBar isTutor={false} onLinkClick={closeSidebar} />
        )}

        {/* Mobile Sidebar Overlay */}
        {isMediumScreen && isSidebarOpen && (
          <>
            {/* Backdrop with blur */}
            <div
              className="fixed inset-0 z-40 backdrop-blur-sm"
              onClick={closeSidebar}
            />

            {/* Sliding Sidebar */}
            <div
              className={`fixed top-0 bottom-0 left-0 z-50 w-[280px] transform bg-white shadow-xl transition-transform duration-300 ease-in-out ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              {/* Logo and Close button */}
              <div className="flex items-center justify-between p-4">
                <HomeLogo />
                <FaTimes
                  size={20}
                  onClick={closeSidebar}
                  className="h-6 w-6 cursor-pointer rounded-full bg-purple-100 hover:bg-purple-200 focus:ring-2 focus:ring-purple-700 focus:outline-none"
                />
              </div>

              {/* Sidebar content */}
              <div className="h-full overflow-y-auto pt-4">
                <SideBar isTutor={false} onLinkClick={closeSidebar} />
              </div>
            </div>
          </>
        )}

        {/* Main Content */}
        <div
          className={`scroll-container ${!isMediumScreen && isSidebarOpen ? 'ml-[240px]' : ''}`}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default StudentLayout;
