import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useAuth } from "../hooks/useAuth";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contacts", to: "/contacts" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (user) {
      logout();
    } else {
      navigate("/login");
    }
    setMenuOpen(false);
  };

  return (
    <header
      className="w-full px-10 py-6 flex items-center justify-between relative"
      style={{ fontFamily: "var(--font-comfortaa)" }}
    >
      <Link
        to="/"
        className="text-xl text-[var(--color-main-dark)] tracking-wide transition-transform hover:scale-110 inline-block"
      >
        Madelyn Torff
      </Link>

      {/* Desktop */}
      <nav className="hidden md:flex items-center gap-10">
        <ul className="flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="text-base text-[var(--color-main-dark)] hover:underline transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {user && (
            <>
              <li>
                <Link
                  to="/admin/projects"
                  className="text-base text-[var(--color-main-dark)] hover:underline transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/contacts"
                  className="text-base text-[var(--color-main-dark)] hover:underline transition-colors"
                >
                  Messages
                </Link>
              </li>
            </>
          )}
        </ul>
        <button
          onClick={handleAuth}
          className="text-sm font-semibold px-4 py-2 rounded-xl border border-[var(--color-main-dark)] text-[var(--color-main-dark)] hover:bg-[var(--color-main-dark)] hover:text-white transition-colors cursor-pointer"
        >
          {user ? "Logout" : "Login"}
        </button>
      </nav>

      {/* Burger button */}
      <button
        className="md:hidden text-[var(--color-main-dark)] cursor-pointer"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? (
          <FaXmark className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[var(--color-bg-light)] shadow-md z-50 md:hidden">
          <ul className="flex flex-col px-10 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-base text-[var(--color-main-dark)] hover:underline transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {user && (
              <>
                <li>
                  <Link
                    to="/admin/projects"
                    className="text-base text-[var(--color-main-dark)] hover:underline transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/contacts"
                    className="text-base text-[var(--color-main-dark)] hover:underline transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Messages
                  </Link>
                </li>
              </>
            )}
            <li>
              <button
                onClick={handleAuth}
                className="text-base text-[var(--color-main-dark)] hover:underline transition-colors cursor-pointer"
              >
                {user ? "Logout" : "Login"}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
