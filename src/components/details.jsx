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
import { GoVideo } from 'react-icons/go';
import { TbCertificate } from 'react-icons/tb';
import { MdOutlineAssessment } from 'react-icons/md';
import { LiaBookSolid } from 'react-icons/lia';
import { FaFileAlt } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';

const baseUrl = import.meta.env.BASE_URL;

export const logo = baseUrl + '/assets/logo.svg';
export const heroImg = baseUrl + '/assets/heroImg.jpg';
export const search = baseUrl + '/assets/search-icon.png';
export const radialGradient = baseUrl + '/assets/raidial-gradient.png';
export const resetFrame = baseUrl + '/assets/Reset-frame.png';
export const cyberSecurity = baseUrl + '/assets/CyberSecurity.png';
export const dataAnalytics = baseUrl + '/assets/dataAnalytics.png';
export const uiUx = baseUrl + '/assets/uiUx.png';
export const interSwitch = baseUrl + '/assets/interswitch.png';
export const payStack = baseUrl + '/assets/paystack.png';
export const mtn = baseUrl + '/assets/mtn.png';
export const faceBook = baseUrl + '/assets/facebook.png';
export const faqHuman = baseUrl + '/assets/faq-human.png';
export const fiveStar = baseUrl + '/assets/fiveStar.png';
export const footerLine = baseUrl + '/assets/footer-line.png';
export const fourStar = baseUrl + '/assets/fourStar.png';
export const google = baseUrl + '/assets/google.png';
export const instagram = baseUrl + '/assets/instagram.png';
export const linkedIn = baseUrl + '/assets/linkedIn.png';
export const logo2 = baseUrl + '/assets/logo2.png';
export const logo3 = baseUrl + '/assets/logo3.svg';
export const checkIcon = baseUrl + '/assets/material-symbols-light_check.png';
export const naira = baseUrl + '/assets/mdi_naira.png';
export const fintech = baseUrl + '/assets/Rectangle 4541.png';
export const unilag = baseUrl + '/assets/unilag.png';
export const chevronRight = baseUrl + '/assets/chevron-right.png';
export const xTwitter = baseUrl + '/assets/X.png';
export const testimonialImg = baseUrl + '/assets/testimonial.png';
export const femaleImg = baseUrl + '/assets/Ellipse 199.png';
export const blackMaleImg = baseUrl + '/assets/Ellipse 200.png';
export const maleImg = baseUrl + '/assets/Ellipse 201.png';

export const banner = baseUrl + './assets/banner.png';
export const banners = baseUrl + './assets/signup-img.png';
export const emailPages = baseUrl + './assets/email-img.svg';

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
console.log;

export const dashboardAsideMenu = [
  {
    name: 'dashboard',
    path: '',
    icon: <MdDashboard size={24} />,
  },
  /*  {
    name: 'create course',
    path: 'upload-course',
    icon: <IoCreate size={24} />,
  }, */
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

export const exploreSectionIcons = [
  {
    name: 'courseManagement',
    path: '/hero',
    icon: <LiaBookSolid size={24} />,
  },
  {
    name: 'contentDelivery',
    path: 'src/sections/Hero.jsx',
    icon: <GoVideo size={24} />,
  },
  {
    name: 'assessmentTools',
    path: 'src/sections/Hero.jsx',
    icon: <FaFileAlt size={24} />,
  },
  {
    name: 'communication',
    path: 'src/sections/Hero.jsx',
    icon: <TiMessages size={24} />,
  },
  {
    name: 'analytics',
    path: 'src/sections/Hero.jsx',
    icon: <MdOutlineAssessment size={24} />,
  },
  {
    name: 'certification',
    path: 'src/sections/Hero.jsx',
    icon: <TbCertificate size={24} />,
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
    path: 'student-courses',
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
