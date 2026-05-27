import { Link } from "react-router";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contacts", to: "/contacts" },
  { label: "Dashboard", to: "/dashboard" },
];

const Navbar = () => {
  return (
    <header
      className="w-full px-10 py-6 flex items-center justify-between"
      style={{ fontFamily: "var(--font-comfortaa)" }}
    >
      <Link
        to="/"
        className="text-xl text-[var(--color-main-dark)] tracking-wide transition-transform hover:scale-110 inline-block"
      >
        Madelyn Torff
      </Link>

      <nav>
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
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
