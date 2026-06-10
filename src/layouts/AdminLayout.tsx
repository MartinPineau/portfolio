import { Outlet, NavLink } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const adminTabs = [
  { label: "Dashboard", to: "/admin", end: true },
  { label: "Projects", to: "/admin/projects", end: false },
  { label: "Messages", to: "/admin/contacts", end: false },
  { label: "Testimonials", to: "/admin/testimonials", end: false },
];

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-light)]">
      <Navbar />
      <div className="max-w-5xl mx-auto w-full px-6 md:px-10 pt-8">
        <nav
          className="inline-flex items-center gap-1 p-1 rounded-full bg-white border border-[var(--color-gray-light)] shadow-sm"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          {adminTabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[var(--color-main-yellow)] text-[var(--color-main-dark)]"
                    : "text-[var(--color-gray-medium)] hover:text-[var(--color-main-dark)]"
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
