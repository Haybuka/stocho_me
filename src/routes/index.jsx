import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout';
import ProtectedRoute from '../protectedRoute';

import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import NotFound from '../pages/notFound';
import Transactions from '../pages/transactions';

const token = localStorage.getItem('__token__');
console.log(token);
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
