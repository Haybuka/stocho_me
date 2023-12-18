import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Transactions from '../pages/transactions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <Dashboard />,
        index: true,
      },
      {
        element: <Transactions />,
        path: '/transact',
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

export default router;
