import React, { useEffect, useState } from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import HomeLogo from '../components/UI/HomeLogo';
import { CgProfile } from 'react-icons/cg';
import SideBar from '../components/UI/SideBar';
import { Outlet } from 'react-router';
import { FaBars } from 'react-icons/fa6';

const StudentLayout = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <header className="flex items-center justify-between px-2 py-4">
        {isMediumScreen ? <FaBars size={25} /> : <HomeLogo />}

        <div className="flex items-center gap-4">
          <IoIosNotificationsOutline />

          <CgProfile size={40} />

          <h3>John Sstudent</h3>
        </div>
      </header>

      <main className="h-screen w-screen">
        {/* sidebar  */}
        {isSidebarOpen && <SideBar />}

        <div className={`scroll-container ${isSidebarOpen && 'ml-[240px]'} `}>
          {/* main content */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default StudentLayout;
