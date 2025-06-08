import React from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import HomeLogo from '../components/UI/HomeLogo';
import { CgProfile } from 'react-icons/cg';
import SideBar from '../components/UI/SideBar';
import { Outlet } from 'react-router';
import useAuthProvider from '@/hooks/useAuthProvider';

const EducatorLayout = () => {
  const {
    auth: { user },
  } = useAuthProvider();
  return (
    <div className="flex h-screen flex-col">
      <header className="container flex items-center justify-between py-4">
        <HomeLogo />

        <div className="flex items-center gap-4">
          <IoIosNotificationsOutline />

          <CgProfile size={40} />

          <h3>{user?.lastName}</h3>
        </div>
      </header>

      <main className="h-screen w-screen overflow-y-auto">
        {/* sidebar  */}
        <SideBar />

        <div className="scroll-container ml-[240px]">
          {/* main content */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default EducatorLayout;
