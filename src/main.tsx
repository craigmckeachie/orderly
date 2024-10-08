import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CustomersPage from './customers/CustomersPage.tsx';
import ErrorPage from './ErrorPage.tsx';
import CustomerCreatePage from './customers/CustomerCreatePage.tsx';
import CustomerEditPage from './customers/CustomerEditPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'customers',
        element: <CustomersPage />,
      },
      {
        path: 'customers/create',
        element: <CustomerCreatePage />,
      },
      {
        path: 'customers/edit/:id',
        element: <CustomerEditPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
