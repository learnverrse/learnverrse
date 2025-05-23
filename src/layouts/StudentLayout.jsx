import React from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import HomeLogo from '../components/UI/HomeLogo';
import { CgProfile } from 'react-icons/cg';
import SideBar from '../components/UI/SideBar';
import { Outlet } from 'react-router';

const StudentLayout = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <header className="container flex items-center justify-between py-4">
        <HomeLogo />

        <div className="flex items-center gap-4">
          <IoIosNotificationsOutline />

          <CgProfile size={40} />

          <h3>John Sstudent</h3>
        </div>
      </header>

      <main className="grid h-screen w-screen grid-cols-12 gap-8">
        {/* sidebar  */}
        <SideBar isTutor={false} />

        {/* main content */}
        <div className="border-primary col-span-6 overflow-y-auto">
          <Outlet />
        </div>
        <div className="border-primary col-span-3 h-screen overflow-y-auto bg-black"></div>
      </main>
    </div>
  );
};

export default StudentLayout;
