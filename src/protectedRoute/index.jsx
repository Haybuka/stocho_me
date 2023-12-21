import useAuthenticated from '../hooks/useAuthenticated';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthenticated();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
  } else {
    return (
      <>
        {children}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    );
  }
};

export default ProtectedRoute;
