import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="container">
      <header>
        <nav className=" text-red-500">nav</nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
