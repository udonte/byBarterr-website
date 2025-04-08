import Footer from "./Footer";
import { Outlet } from "react-router";
import Navbar from "./navbar";

const WebsiteLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default WebsiteLayout;
