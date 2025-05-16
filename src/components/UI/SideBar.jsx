import { dashboardAsideMenu } from '../details';
import { Link } from 'react-router';
const SideBar = () => {
  return (
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
  );
};

export default SideBar;
