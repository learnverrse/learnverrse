import { IoIosNotificationsOutline } from 'react-icons/io';
import HomeLogo from '../components/UI/HomeLogo';
import { CgProfile } from 'react-icons/cg';
import { dashboardAsideMenu } from '../components/details';
import { Link } from 'react-router';
import Button from '../components/UI/Button';
import { useState } from 'react';

const Dashboard = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);

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

      <main className="grid w-screen grid-cols-12 gap-8">
        {/* sidebar  */}
        <aside className="col-span-3 flex h-screen flex-col overflow-auto">
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
        <div className="border-primary col-span-9">
          <h2 className="mb-5">Professional Evaluation</h2>
          <div className="grid w-full! grid-cols-4 gap-4">
            <div className="col-span-1">
              <select
                name="courses"
                id="courses"
                className="word-brake w-full cursor-pointer py-4"
              >
                {[...Array(5)].map((_, i) => (
                  <option value={`course-${i}`}>
                    Data Analytics: Transforming Data into Actionable Insights
                  </option>
                ))}
              </select>

              <h2>Weekly Events</h2>
              <div className="flex flex-col gap-2">
                {[...Array(8)].map((_, i) => {
                  const week = i + 1;
                  return (
                    <Button
                      key={week}
                      label={`week ${week}`}
                      fun={() => {
                        setSelectedWeek(week);
                      }}
                      active={selectedWeek === week}
                    />
                  );
                })}
              </div>
            </div>

            {/* 2nd grid */}
            <div className="col-span-3">
              <div className="flex justify-between px-8">
                <h2>Week 1</h2>

                <button className="cursor-pointer text-2xl">+</button>
              </div>

              <div className="mx-auto mt-10 w-fit">
                <Button label="set Quiz" active={true} fun={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
