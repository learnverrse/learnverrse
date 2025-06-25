import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from './routes/routes.jsx';

import { Toaster } from './components/UI/sonner';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './contexts/AuthProvider';
import AppProvider from './contexts/AppProvider';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});

const client = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <AppProvider>
        <AuthProvider>
          <Toaster />
          <ToastContainer />
          <RouterProvider router={router} />
        </AuthProvider>
      </AppProvider>
    </QueryClientProvider>
  </StrictMode>
);
