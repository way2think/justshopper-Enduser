import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Cod from "../Navbar/Cod";
import NavbarNew from "../Navbar/NavbarNew";
import SideNav from "../Navbar/SideNav";

const DashBoardLayout = () => {
  return (
    <>
      <Cod />
      {/* <Navbar /> */}
      <NavbarNew />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashBoardLayout;
