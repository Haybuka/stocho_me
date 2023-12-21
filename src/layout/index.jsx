import { NavLink, Outlet } from 'react-router-dom';
import styles from './nav.module.css';
import { useNavigate } from 'react-router-dom';

import '../App.css';

import HomeIcon from '../assets/homeIcon';
import cls from 'classname';
import LogoutIcon from '../assets/logoutIcon';
import TransactIcon from '../assets/transactIcon';
import { useState } from 'react';
import ProfileIcon from '../assets/profileIcon';
import TopBar from './topBar';
import { useLogoutRequest } from '../api/auth';

const navigations = [
  {
    name: 'Dashboard',
    route: '/',
    icon: <HomeIcon />,
  },
  {
    name: 'Transactions',
    route: '/transactions',
    icon: <TransactIcon />,
  },
];

const RootLayout = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(true);

  const handleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const { mutate: logoutRequest } = useLogoutRequest();

  const handleLogout = () => {
    localStorage.clear();
    logoutRequest();
    navigate('/login');
  };
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#F5F5F5] flex items-start ">
      <header
        className={cls(
          'w-5/6 md:w-2/6 lg:w-1/6 bg-white h-full transition-all overflow-x-hidden',
          !isVisible ? 'hidden' : 'block'
        )}
      >
        <nav className="w-full px-2 flex justify-between flex-col h-full pb-12">
          <aside>
            <h3 className="my-3 text-md uppercase font-bold text-[#009947] flex items-center cursor-pointer">
              Stochostech
            </h3>
            <ul className="my-6">
              {navigations.map((nav, id) => (
                <NavLink
                  to={nav.route}
                  key={id}
                  className={({ isActive }) =>
                    isActive
                      ? cls(
                          styles.navItem,
                          `bg-green-300 rounded-full px-3 text-stochostech`
                        )
                      : cls(styles.navItem, ``)
                  }
                >
                  <span>{nav.icon}</span>
                  <span className="mx-3 inline-block">{nav.name}</span>
                </NavLink>
              ))}
            </ul>
          </aside>
          <aside>
            <NavLink
              href={'/profile'}
              to={'/profile'}
              className={({ isActive }) =>
                isActive
                  ? cls(
                      styles.navItem,
                      `bg-green-300 rounded-full px-3 text-stochostech`
                    )
                  : cls(styles.navItem, ``)
              }
            >
              <span>
                <ProfileIcon />
              </span>
              <span className="mx-3 inline-block">Profile</span>
            </NavLink>
            <NavLink
              href={'/login'}
              to={'/login'}
              className={cls(styles.navItem)}
              onClick={handleLogout}
            >
              <span>
                <LogoutIcon />
              </span>
              <span className="mx-3 inline-block">log out</span>
            </NavLink>
          </aside>
        </nav>
      </header>

      <main
        className={cls(
          'w-full h-full transition-all uppercase ',
          !isVisible ? 'ml-0' : 'ml-6'
        )}
      >
        <TopBar handleVisibility={handleVisibility} />
        <article className="rounded-xl h-full my-3 overflow-hidden p-3">
          <aside className="mb-10 h-full">
            <Outlet />
          </aside>
        </article>
      </main>
    </div>
  );
};

export default RootLayout;
