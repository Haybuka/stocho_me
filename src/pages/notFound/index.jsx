import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import useAuthenticated from '../../hooks/useAuthenticated';

const NotFound = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthenticated();
  const handleClick = () => {
    if (isAuthenticated) {
      navigate('/');
    } else {
      navigate('/login');
    }
  };
  return (
    <main className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <section>
        <h3 className="text-xl font-semibold my-10">
          <span className="block my-2">OOOpss!!,</span>
          {isAuthenticated ? (
            <span className="block my-2">looks like you took a wrong turn</span>
          ) : (
            <span className="block my-2">Youve been logged out</span>
          )}
        </h3>
        <Button
          handleClick={handleClick}
          text={isAuthenticated ? 'Back Home' : 'Login'}
        />
      </section>
    </main>
  );
};

export default NotFound;
