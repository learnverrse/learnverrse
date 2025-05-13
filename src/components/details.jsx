import { CiLogout, CiSettings } from 'react-icons/ci';
import { FaGraduationCap } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoBookOutline, IoCreate } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { SiSimpleanalytics } from 'react-icons/si';

const baseUrl = import.meta.env.BASE_URL;

export const logo = baseUrl + '/assets/logo.png';
export const heroImg = baseUrl + '/assets/hero-image.png';
export const search = baseUrl + '/assets/search-icon.png';
export const radialGradient = baseUrl + '/assets/raidial-gradient.png';
export const resetFrame = baseUrl + '/assets/Reset-frame.png';

export const banner = baseUrl + './assets/banner.png';

export const navLinks = [
  {
    name: 'explore',
    path: '#',
  },
  {
    name: 'about',
    path: '#',
  },
];

export const dashboardAsideMenu = [
  {
    name: 'dashboard',
    icon: <MdDashboard size={24} />,
  },
  {
    name: 'create course',
    icon: <IoCreate size={24} />,
  },
  {
    name: 'my courses',
    icon: <IoBookOutline size={24} />,
  },
  {
    name: 'student',
    icon: <FaGraduationCap size={24} />,
  },
  {
    name: 'analytics ',
    icon: <SiSimpleanalytics size={24} />,
  },
  {
    name: 'earnings',
    icon: <GiReceiveMoney size={24} />,
  },
  {
    name: 'message',
    icon: <FiMessageCircle size={24} />,
  },
  {
    name: 'settings',
    icon: <CiSettings size={24} />,
  },
  {
    name: 'logout',
    icon: <CiLogout size={24} />,
  },
];
