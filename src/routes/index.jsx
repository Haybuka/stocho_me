import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout';
import ProtectedRoute from '../protectedRoute';

import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import NotFound from '../pages/notFound';
import Transactions from '../pages/transactions';
import Profile from '../pages/profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        element: <Dashboard />,
        index: true,
      },
      {
        element: <Transactions />,
        path: '/transactions',
      },
      {
        element: <Profile />,
        path: '/profile',
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
