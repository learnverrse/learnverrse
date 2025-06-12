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
import TutorsDashboard from '@/pages/tutotorPage/TutorsDashboard';
import CourseContent from '@/pages/tutotorPage/CreateCourse/CourseContent';
import CourseInformation from '@/pages/tutotorPage/CreateCourse/CourseInformation';
import Quiz from '@/pages/tutotorPage/CreateCourse/Quiz';
import CoursePricing from '@/pages/tutotorPage/CreateCourse/CoursePricing';
import StudentCourses from '@/pages/learnerspage/StudentCourses';
import RoleSelector from '@/pages/onboardingPages/RoleSelector';
import LearningPage from '@/pages/StudentCourse/LearningPage';

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
    path: 'role-selector',
    element: <RoleSelector />,
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

  // {
  //   path: 'test',

  //   element: <LearningPage />,
  // },

  {
    path: 'learning-page',
    element: <LearningPage />,
  },

  // 👨‍🏫 Educator Routes
  {
    path: 'educator',
    element: <ProtectedRoute role="EDUCATOR" />,
    children: [
      {
        path: '',
        element: <Educatorlayout />,
        children: [
          {
            index: true,
            element: <TutorsDashboard />,
          },
          {
            path: 'student',
            element: (
              <QuizProvider>
                <Student />
              </QuizProvider>
            ),
          },
          // course upload pages
          {
            path: 'upload-course',
            element: <CourseInformation />,
          },
          {
            path: 'my-courses',
            element: <MyCourses />,
          },
          {
            path: 'upload-course-content',
            element: <CourseContent />,
          },
          {
            path: 'pricing',
            element: <CoursePricing />,
          },

          // course upload pages ends here 👆
        ],
      },
    ],
  },

  // 🎓 Student Routes
  {
    path: '/learner-dashboard',
    // element: <ProtectedRoute role="LEARNER" />, temporarily commented so it can be assessed without authentication
    children: [
      {
        path: '',
        element: <StudentLayout />,
        children: [
          {
            index: true,
            element: <LearnersDashboard />,
          },
          {
            path: 'my-courses',
            element: <StudentCourses />,
          },
          {
            path: 'learning-page',
            element: <LearningPage />,
          },
        ],
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
