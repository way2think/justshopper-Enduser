import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Cod from "../Navbar/Cod";

const DashBoardLayout = () => {
  return (
    <>
      <Cod />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashBoardLayout;
