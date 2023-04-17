import { Outlet } from 'react-router-dom';
import Navbar from './navBar';

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
