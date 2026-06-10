import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaArrowRightFromBracket, FaBars, FaXmark } from "react-icons/fa6";
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

  const handleLogin = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
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
        Martin Pineau
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
            <li>
              <Link
                to="/admin"
                className="text-base text-[var(--color-main-dark)] hover:underline transition-colors"
              >
                Admin
              </Link>
            </li>
          )}
        </ul>
        {user ? (
          <div className="flex items-center gap-3">
            <img
              src={user.avatarUrl}
              alt={user.name}
              title={user.name}
              className="w-9 h-9 rounded-full object-cover border border-[var(--color-main-dark)]"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={handleLogout}
              className="p-2 rounded-full text-[var(--color-main-dark)] hover:bg-[var(--color-main-dark)] hover:text-white transition-colors cursor-pointer"
              title="Logout"
              aria-label="Logout"
            >
              <FaArrowRightFromBracket className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="text-sm font-semibold px-4 py-2 rounded-xl border border-[var(--color-main-dark)] text-[var(--color-main-dark)] hover:bg-[var(--color-main-dark)] hover:text-white transition-colors cursor-pointer"
          >
            Login
          </button>
        )}
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
              <li>
                <Link
                  to="/admin"
                  className="text-base text-[var(--color-main-dark)] hover:underline transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Admin
                </Link>
              </li>
            )}
            <li>
              {user ? (
                <div className="flex items-center gap-3">
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    title={user.name}
                    className="w-8 h-8 rounded-full object-cover border border-[var(--color-main-dark)]"
                    referrerPolicy="no-referrer"
                  />
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-base text-[var(--color-main-dark)] hover:underline transition-colors cursor-pointer"
                  >
                    <FaArrowRightFromBracket className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  className="text-base text-[var(--color-main-dark)] hover:underline transition-colors cursor-pointer"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
