import { dashboardAsideMenu, learnersSidebar } from '../details';
import { Link } from 'react-router';
const SideBar = ({isTutor=true}) => {

  const asideMenu = isTutor ? (dashboardAsideMenu) : (learnersSidebar)
  return (
    <aside className="col-span-3 flex h-screen flex-col overflow-auto">
      {asideMenu.map(({ icon, path, name }, index) => (
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
      ))}
    </aside>
  );
};

export default SideBar;
