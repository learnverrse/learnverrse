import HomePage from '../pages/HomePage';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import SignIn from '../pages/SignIn';
import OtpPage from '../pages/OtpPage';
import OtpResetPassword from '../pages/OtpResetPassword';
import SetNewPassword from '../pages/SetNewPassword';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../layouts/Dashboard';
import Student from '@/pages/tutotorPage/Student';
import QuizProvider from '../contexts/QuizProvider';
import MyCourses from '@/pages/tutotorPage/MyCourses';
import UploadCourse from '@/pages/tutotorPage/UploadCourse';

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
  {
    path: '/set-new-password',
    element: <SetNewPassword />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard',
        element: (
          <QuizProvider>
            <Student />
          </QuizProvider>
        ),
      },
      {
        path: '/dashboard/my-courses',
        element: <MyCourses />,
      },
      {
        path: '/dashboard/upload-course',
        element: <UploadCourse />,
      },
    ],
  },
];
