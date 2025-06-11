import useLogout from '@/hooks/useLogout';
import { dashboardAsideMenu, learnersSidebar } from '../details';
import { Link } from 'react-router';
const SideBar = ({ isTutor = true }) => {
  const asideMenu = isTutor ? dashboardAsideMenu : learnersSidebar;
  const logout = useLogout();
  return (
    <aside className="border-ourGray fixed top-[76px] left-0 z-50 flex h-screen w-[240px] flex-col overflow-auto border-r bg-white">
      {asideMenu.map(({ icon, path, name }, index) =>
        name !== 'logout' ? (
          <Link
            to={`${path}`}
            key={index}
            className="border-ourGray hover:bg-primary-500 border capitalize transition-all duration-150 hover:text-white"
          >
            <div className="flex items-center gap-2 p-4 text-sm">
              {icon}
              <p>{name}</p>
            </div>
          </Link>
        ) : (
          <button
            key={name}
            className="border-ourGray hover:bg-primary-500 cursor-pointer border capitalize transition-all duration-150 hover:text-white"
            onClick={() => logout()}
          >
            <div className="flex items-center gap-2 p-4 text-sm">
              {icon}
              <p>{name}</p>
            </div>
          </button>
        )
      )}
    </aside>
  );
};

export default SideBar;
