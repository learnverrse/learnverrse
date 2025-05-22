import { IoIosNotificationsOutline } from 'react-icons/io';
import HomeLogo from '../components/UI/HomeLogo';
import { CgProfile } from 'react-icons/cg';
import SideBar from '../components/UI/SideBar';
import { Outlet } from 'react-router';

const StudentDashboard = () => {
  return (
    <section className="h-screen w-screen overflow-hidden">
      {/* header */}
      <header className="container flex items-center justify-between py-4">
        <HomeLogo />

        <div className="flex items-center gap-4">
          <IoIosNotificationsOutline />

          <CgProfile size={40} />

          <h3>John Smith</h3>
        </div>
      </header>

      <main className="grid w-screen grid-cols-12 gap-8">
        {/* sidebar  */}
        <SideBar />

        {/* main content */}
        <div className="border-primary col-span-9">
          <Outlet />
        </div>
      </main>
    </section>
  );
};

export default StudentDashboard;
