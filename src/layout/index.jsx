import { NavLink, Outlet } from 'react-router-dom';
import styles from './nav.module.css';
import '../App.css';

import HomeIcon from '../assets/homeIcon';
import cls from 'classname';
import LogoutIcon from '../assets/logoutIcon';
import TransactIcon from '../assets/transactIcon';

const RootLayout = () => {
  const navigations = [
    {
      name: 'Dashboard',
      route: '/',
      icon: <HomeIcon />,
    },
    {
      name: 'Transactions',
      route: '/transact',
      icon: <TransactIcon />,
    },
  ];
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#F5F5F5] flex items-start">
      <header
        // className={cls(
        //   'w-5/6 md:w-1/6 bg-red-500 h-full',
        //   !isVisible ? 'hidden' : 'block'
        // )}
        className="w-1/6 bg-white h-full"
      >
        <nav className="w-full px-2 flex justify-between flex-col h-full pb-12">
          <aside>
            <h3 className="my-3 text-xl font-bold text-[#009947] flex items-center cursor-pointer">
              Stochostech
            </h3>
            <ul>
              {navigations.map((nav, id) => (
                <NavLink
                  to={nav.route}
                  key={id}
                  className={cls(
                    styles.navItem
                    // pathname === nav.route && `${styles.active} bg-[#F5F5F5]`
                  )}
                >
                  <span>{nav.icon}</span>
                  <span className="mx-3 inline-block">{nav.name}</span>
                </NavLink>
              ))}
            </ul>
          </aside>
          <NavLink
            href={'/login'}
            to={'/login'}
            className={cls(
              styles.navItem
              // pathname === nav.route && `${styles.active} bg-[#F5F5F5]`
            )}
          >
            <span>
              <LogoutIcon />
            </span>
            <span className="mx-3 inline-block">logout</span>
          </NavLink>
        </nav>
      </header>

      <main className="w-full h-full">
        <aside className="bg-white rounded-b-xl py-4 px-3">
          <p className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </p>
        </aside>
        <article className="p-3">
          <Outlet />
        </article>
      </main>
    </div>
  );
};

export default RootLayout;
