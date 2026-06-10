import { Link } from "react-router";
import Button from "../components/Button";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-10 py-16 text-center">
      <h1
        className="text-8xl font-bold text-[var(--color-main-yellow)] mb-4"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        404
      </h1>
      <h2
        className="text-2xl font-bold text-[var(--color-main-dark)] mb-3"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Page not found
      </h2>
      <p
        className="text-[var(--color-gray-medium)] mb-8 max-w-md"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </section>
  );
};

export default NotFoundPage;
