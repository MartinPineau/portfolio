import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BaseLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-light)]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BaseLayout;
