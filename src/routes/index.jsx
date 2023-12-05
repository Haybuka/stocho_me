import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout';
import Dashboard from '../pages/dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <Dashboard />,
        index: true,
      },
    ],
  },
]);

export default router;
