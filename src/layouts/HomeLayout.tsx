import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imageTopRight from "../assets/ImageTopRight.png";

const HomeLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--color-bg-light)]">
      <img
        src={imageTopRight}
        alt=""
        className="absolute top-0 right-0 w-[55%] max-w-[600px] h-auto pointer-events-none select-none"
      />
      <div className="relative">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
