import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-light)]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AdminLayout;
