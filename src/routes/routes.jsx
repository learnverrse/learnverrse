import HomePage from '../pages/HomePage';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import SignIn from '../pages/SignIn';
import OtpPage from '../pages/OtpPage';
import OtpResetPassword from '../pages/OtpResetPassword';
import ForgotPassword from '../pages/ForgotPassword';
import Student from '@/pages/tutotorPage/Student';
import QuizProvider from '../contexts/QuizProvider';
import MyCourses from '@/pages/tutotorPage/MyCourses';
import UploadCourse from '@/pages/tutotorPage/UploadCourse';
import ProtectedRoute from './ProtectedRoute';
import StudentDashboard from '../layouts/StudentDashboard';
import EducatorDashboard from '@/layouts/EducatorDashboard';

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

  // 👨‍🏫 Educator Routes
  {
    path: '/educator-dashboard',
    element: <ProtectedRoute role="EDUCATOR" />,
    children: [
      {
        path: '',
        element: <EducatorDashboard />,
        children: [
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
        element: <StudentDashboard />,
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
            path: 'my-courses',
            element: <MyCourses />,
          },
        ],
      },
    ],
  },
];
