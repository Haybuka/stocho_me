import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import useAuthenticated from '../../hooks/useAuthenticated';
import notFound from '../../assets/images/notFound.jpg';

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
        <div className="mx-auto w-64 h-64 md:w-96 md:h-96">
          <img src={notFound} alt="notFound" className="w-full h-full" />
        </div>
        <h3 className="text-xl  my-10">
          {isAuthenticated ? (
            <span className="block my-2 text-center">
              looks like you took a wrong turn
            </span>
          ) : (
            <span className="block my-2 text-center">
              Youve been logged out
            </span>
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
