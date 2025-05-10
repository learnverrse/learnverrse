import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from './components/routes.jsx';

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
