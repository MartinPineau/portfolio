import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[var(--color-bg-dark)] text-center py-6">
        <p className="text-sm text-[var(--color-gray-medium)]">
          <FaInstagram className="inline-block mx-2 w-8 h-8" />
          <FaLinkedin className="inline-block mx-2 w-8 h-8" />
          <FaEnvelope className="inline-block mx-2 w-8 h-8" />
        </p>
      </footer>
    </div>
  );
};

export default Footer;
