import React from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import HomeLogo from '../components/UI/HomeLogo';
import { CgProfile } from 'react-icons/cg';
import SideBar from '../components/UI/SideBar';
import { Outlet } from 'react-router';

const EducatorLayout = () => {
  return (
    <div className="flex h-screen flex-col">
      <header className="container flex items-center justify-between py-4">
        <HomeLogo />

        <div className="flex items-center gap-4">
          <IoIosNotificationsOutline />

          <CgProfile size={40} />

          <h3>John Smith</h3>
        </div>
      </header>

      <main className="grid h-screen w-screen grid-cols-12 gap-8 overflow-hidden">
        {/* sidebar  */}
        <SideBar />

        {/* main content */}
        <div className="border-primary col-span-9 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default EducatorLayout;
