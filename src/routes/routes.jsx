import HomePage from '../pages/home/HomePage';
import SignUp from '../pages/onboardingPages/SignUp';
import ResetPassword from '../pages/onboardingPages/ResetPassword';
import SignIn from '../pages/onboardingPages/SignIn';
import OtpPage from '../pages/onboardingPages/OtpPage';
import OtpResetPassword from '../pages/onboardingPages/OtpResetPassword';
import ForgotPassword from '../pages/onboardingPages/ForgotPassword';
import Student from '@/pages/tutotorPage/Student';
import QuizProvider from '../contexts/QuizProvider';
import MyCourses from '@/pages/tutotorPage/MyCourses';
import UploadCourse from '@/pages/tutotorPage/UploadCourse';
import LearnersDashboard from '@/pages/learnerspage/LearnersDashboard';
import StudentLayout from '@/layouts/StudentLayout';
import ProtectedRoute from './ProtectedRoute';
import Educatorlayout from '@/layouts/EducatorLayout';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/Sign-up',
    element: <SignUp />,
  },
  {
    path: '/SignIn',
    element: <SignIn />,
  },
  {
    path: '/ForgotPassword',
    element: <ForgotPassword />,
  },
  {
    path: '/Reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/otp',
    element: <OtpPage />,
  },
  {
    path: '/otp-reset-password',
    element: <OtpResetPassword />,
  },
  // tests

  /* {
    path: 'test-student',
    element: <StudentLayout />,
  }, */

  // 👨‍🏫 Educator Routes
  {
    path: '/educator-dashboard',
    element: <ProtectedRoute role="EDUCATOR" />,
    children: [
      {
        path: '',
        element: <Educatorlayout />,
        children: [
          {
            index: true,
            element: (
              <QuizProvider>
                <Student />
              </QuizProvider>
            ),
          },
          {
            path: 'upload-course',
            element: <UploadCourse />,
          },
          {
            path: 'my-courses',
            element: <MyCourses />,
          },
          {
            path: 'upload-course',
            element: <UploadCourse />,
          },
          /* {
            path: 'manage-courses',
            element: <ManageCourses />,
          }, */
        ],
      },
    ],
  },

  // 🎓 Student Routes
  {
    path: '/learner-dashboard',
    element: <ProtectedRoute role="LEARNER" />,
    children: [
      {
        path: '',
        element: <StudentLayout />,
        children: [],
      },
    ],
  },

  /*   {
    path: '/learners',
    element: <StudentDashboard />,
    children: [
      {
        path: '/learners/learners-dashboard',
        element: <LearnersDashboard />,
      },
    ],
  }, */
];
