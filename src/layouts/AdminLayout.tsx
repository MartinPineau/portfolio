import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-light)]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
