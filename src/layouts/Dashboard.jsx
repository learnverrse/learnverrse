import { IoIosNotificationsOutline } from 'react-icons/io';
import HomeLogo from '../components/UI/HomeLogo';
import { CgProfile } from 'react-icons/cg';
import { dashboardAsideMenu } from '../components/details';
import { Link } from 'react-router';

const Dashboard = () => {
  return (
    <section className="h-screen w-screen overflow-hidden">
      {/* header */}
      <header className="container flex items-center justify-between py-4">
        <HomeLogo />

        <div className="flex items-center gap-4">
          <IoIosNotificationsOutline />

          <CgProfile />

          <h3>John Smith</h3>
        </div>
      </header>

      {/* sidebar  */}

      <main className="grid grid-cols-12 gap-8">
        <aside className="col-span-2 flex h-screen flex-col overflow-auto">
          {dashboardAsideMenu.map(({ icon, name }, index) => (
            <Link
              to={'/'}
              key={index}
              className="border-ourGray hover:bg-primary-500 border capitalize transition-all duration-150 hover:text-white"
            >
              <div className="flex items-center gap-2 p-4 text-sm">
                {icon}
                <p>{name}</p>
              </div>
            </Link>
          ))}
        </aside>

        {/* main content */}
        <div className="col-span-9"></div>
      </main>
    </section>
  );
};

export default Dashboard;
