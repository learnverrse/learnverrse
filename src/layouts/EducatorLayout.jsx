import React, { useEffect, useState } from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import HomeLogo from '../components/UI/HomeLogo';
import { CgProfile } from 'react-icons/cg';
import SideBar from '../components/UI/SideBar';
import { Outlet } from 'react-router';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from "react-icons/fa";
import useAuthProvider from '@/hooks/useAuthProvider';

const EducatorLayout = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const {
    auth: { user, token },
  } = useAuthProvider();

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
      <header className="flex items-center justify-between px-2 py-4 relative z-30">
        {isMediumScreen ? (
          <FaBars size={25} onClick={toggleSidebar} className="cursor-pointer" />
        ) : (
          <HomeLogo />
        )}

        <div className="flex items-center gap-4">
          <IoIosNotificationsOutline />
          <CgProfile size={40} />
          <h3>{user?.name}</h3>
        </div>
      </header>

      <main className="flex-1 relative">
        {/* Desktop Sidebar */}
        {!isMediumScreen && isSidebarOpen && (
          <SideBar isTutor={true} onLinkClick={closeSidebar} />
        )}

        {/* Mobile Sidebar Overlay */}
        {isMediumScreen && isSidebarOpen && (
          <>
            {/* Backdrop with blur */}
            <div 
              className="fixed inset-0 backdrop-blur-sm z-40"
              onClick={closeSidebar}
            />
            
            {/* Sliding Sidebar */}
            <div className={`fixed left-0 top-0 bottom-0 w-[280px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
              {/* Logo and Close button */}
              <div className="flex justify-between items-center p-4">
                <HomeLogo />
                <FaTimes 
                  size={20} 
                  onClick={closeSidebar} 
                  className="cursor-pointer h-6 w-6 rounded-full bg-purple-100 hover:bg-purple-200 focus:ring-2 focus:ring-purple-700 focus:outline-none"
                />
              </div>
              
              {/* Sidebar content */}
              <div className="h-full overflow-y-auto pt-4">
                <SideBar isTutor={true} onLinkClick={closeSidebar} />
              </div>
            </div>
          </>
        )}

        {/* Main Content */}
        <div className={`scroll-container ${!isMediumScreen && isSidebarOpen ? 'ml-[240px]' : ''}`}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default EducatorLayout;