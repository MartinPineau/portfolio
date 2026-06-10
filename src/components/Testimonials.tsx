import { type Testimonial } from "../types";
import TestimonialCard from "./TestimonialCard";

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Working with Martin was an absolute pleasure. His attention to detail and creative vision transformed our product into something truly exceptional.",
    author: "Sarah Johnson",
    role: "Product Manager at Acme Corp",
    initials: "SJ",
    visible: true,
  },
  {
    id: "2",
    quote:
      "Martin delivered outstanding UI/UX work on a tight deadline. He understood our needs immediately and exceeded every expectation we had.",
    author: "Thomas Bernard",
    role: "CTO at StartupX",
    initials: "TB",
    visible: true,
  },
  {
    id: "3",
    quote:
      "His designs are clean, intuitive and always user-centered. I highly recommend Martin to anyone looking for a talented and professional designer.",
    author: "Laura Chen",
    role: "CEO at DesignLab",
    initials: "LC",
    visible: true,
  },
];

const Testimonials = () => {
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
