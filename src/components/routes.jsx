import HomePage from '../pages/HomePage';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import SignIn from '../pages/SignIn';

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
    path: '/Reset-password',
    element: <ResetPassword />,
  },
];
