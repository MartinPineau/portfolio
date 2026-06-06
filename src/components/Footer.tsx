import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import footerWave from "../assets/footer.png";

const Footer = () => {
  return (
    <footer className="relative text-center">
      <img
        src={footerWave}
        alt=""
        className="w-full pointer-events-none select-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-6">
        <p className="text-sm text-[var(--color-gray-medium)]">
          <FaInstagram className="inline-block mx-2 w-8 h-8 text-[var(--color-main-dark)]" />
          <FaLinkedin className="inline-block mx-2 w-8 h-8 text-[var(--color-main-dark)]" />
          <FaEnvelope className="inline-block mx-2 w-8 h-8 text-[var(--color-main-dark)]" />
        </p>
        <p className="text-sm text-[var(--color-gray-medium)] mt-4">
          Madelyn Torff 2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;
