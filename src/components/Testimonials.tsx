import TestimonialCard from "./TestimonialCard";
import { useTestimonials } from "../hooks/useTestimonials";

const Testimonials = () => {
  const { testimonials } = useTestimonials();

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="px-10 py-16"
    >
      <h2
        id="testimonials-heading"
        className="relative w-fit mx-auto text-4xl font-bold text-[var(--color-main-dark)] mb-12 pb-2.5
          before:content-[''] before:absolute before:w-1/2 before:h-[3px] before:bottom-0 before:left-1/4 before:bg-[var(--color-main-yellow)]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Testimonials
      </h2>

      <ol
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        aria-label="Client testimonials"
      >
        {testimonials
          .filter((t) => t.visible)
          .map((t) => (
            <li key={t.id}>
              <TestimonialCard {...t} />
            </li>
          ))}
      </ol>
    </section>
  );
};

export default Testimonials;
