import { CiLogout, CiSettings } from 'react-icons/ci';
import { FaGraduationCap } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoBookOutline, IoCreate } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { SiSimpleanalytics } from 'react-icons/si';
import { GrRadialSelected } from 'react-icons/gr';
import { GoMultiSelect } from 'react-icons/go';
import { PiCertificateFill } from 'react-icons/pi';

const baseUrl = import.meta.env.BASE_URL;

export const logo = baseUrl + '/assets/logo.svg';
export const heroImg = baseUrl + '/assets/heroImg.jpg';
export const search = baseUrl + '/assets/search-icon.png';
export const radialGradient = baseUrl + '/assets/raidial-gradient.png';
export const resetFrame = baseUrl + '/assets/Reset-frame.png';

export const banner = baseUrl + './assets/banner.png';
export const banners = baseUrl + './assets/banners.svg';

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
console.log

export const dashboardAsideMenu = [
  {
    name: 'dashboard',
    path: '',
    icon: <MdDashboard size={24} />,
  },
  {
    name: 'create course',
    path: 'upload-course',
    icon: <IoCreate size={24} />,
  },
  {
    name: 'my courses',
    path: 'my-courses',
    icon: <IoBookOutline size={24} />,
  },
  {
    name: 'student',
    path: 'student',
    icon: <FaGraduationCap size={24} />,
  },
  {
    name: 'analytics ',
    path: '/dashboard',
    icon: <SiSimpleanalytics size={24} />,
  },
  {
    name: 'earnings',
    path: '/dashboard',
    icon: <GiReceiveMoney size={24} />,
  },
  {
    name: 'message',
    path: '/dashboard',
    icon: <FiMessageCircle size={24} />,
  },
  {
    name: 'settings',
    path: '/dashboard',
    icon: <CiSettings size={24} />,
  },
  {
    name: 'logout',
    path: '/dashboard',
    icon: <CiLogout size={24} />,
  },
];

export const learnersSidebar = [
  {
    name: 'dashboard',
    path: '',
    icon: <MdDashboard size={24} />,
  },
  {
    name: 'my courses',
    path: '/dashboard/my-courses',
    icon: <IoBookOutline size={24} />,
  },
  {
    name: 'certificate',
    path: '/',
    icon: <PiCertificateFill size={24} />,
  },
  {
    name: 'message',
    path: '/dashboard',
    icon: <FiMessageCircle size={24} />,
  },
  {
    name: 'settings',
    path: '/dashboard',
    icon: <CiSettings size={24} />,
  },
  {
    name: 'logout',
    path: '/dashboard',
    icon: <CiLogout size={24} />,
  },
];

export const questionIcons = [
  {
    name: 'short answer',
    icon: <GoMultiSelect />,
    type: 'mcqs',
  },
  {
    name: 'options',
    icon: <GrRadialSelected />,
    type: 'essay',
  },
];

export const myCourses = [
  {
    id: Math.random(),
    heading: 'Web Programming; HTML, CSS, Javascript.....',
    text: 'Programming and Software Development',
    src: '/learnverrse/src/assets/my-courses-imgs/web-programming.svg',
  },
  {
    id: Math.random(),
    heading: 'Cybersecurity',
    text: 'Cybersecurity Essentials; Ethnical Hacking.....',
    src: '/learnverrse/src/assets/my-courses-imgs/security.svg',
  },
  {
    id: Math.random(),
    heading: 'SQL for Data Analytics',
    text: 'Data Science and Analytics',
    src: '/learnverrse/src/assets/my-courses-imgs/SQl.svg',
  },
  {
    id: Math.random(),
    heading: 'Natural Language Processing (NLP)',
    text: 'Artificial Intelligence',
    src: '/learnverrse/src/assets/my-courses-imgs/NLP.svg',
  },
  {
    id: Math.random(),
    heading: 'UI Design with Figma and Adobe XD',
    text: 'UI/UX Design',
    src: '/learnverrse/src/assets/my-courses-imgs/UI.svg',
  },
  {
    id: Math.random(),
    heading: 'IT Support Fundamentals',
    text: 'IT and Networking',
    src: '/learnverrse/src/assets/my-courses-imgs/IT.svg',
  },
];
