/* eslint-disable react/prop-types */
import { useLocation } from 'react-router-dom';
import useProfile from '../hooks/useProfile';
import BurgerIcon from '../assets/burgerIcon';

const TopBar = ({ handleVisibility }) => {
  const location = useLocation();
  const path = location?.pathname?.slice(1);
  const { profile } = useProfile();

  return (
    <section className="bg-white rounded-b-xl p-4 flex justify-between items-center">
      <aside className="flex">
        <div className="block cursor-pointer" onClick={handleVisibility}>
          <BurgerIcon />
        </div>
        <p className="ml-4 capitalize hidden sm:block">
          {path?.length > 1 ? path : 'Dashboard'}
        </p>
      </aside>
      <aside>
        <p>{profile?.name}</p>
      </aside>
    </section>
  );
};

export default TopBar;
