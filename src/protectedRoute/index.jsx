import useAuthenticated from '../hooks/useAuthenticated';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthenticated();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
  } else {
    return children;
  }
};

export default ProtectedRoute;
