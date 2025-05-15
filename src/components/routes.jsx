import HomePage from '../pages/HomePage';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../layouts/Dashboard';
import Student from '@/pages/tutotorPage/Student';
import QuizProvider from "../contexts/QuizProvider"

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
    ],
  },
];
