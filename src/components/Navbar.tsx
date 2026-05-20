const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contacts", href: "#contacts" },
];

const Navbar = () => {
  return (
    <header
      className="w-full px-10 py-6 flex items-center justify-between"
      style={{ fontFamily: "var(--font-comfortaa)" }}
    >
      <a
        href="#"
        className="text-xl text-[var(--color-main-dark)] tracking-wide"
      >
        Madelyn Torff
      </a>

      <nav>
        <ul className="flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-base text-[var(--color-main-dark)] hover:text-[var(--color-main-yellow)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
