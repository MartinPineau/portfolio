import { FaQuoteLeft } from "react-icons/fa6";

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  initials: string;
};

const TestimonialCard = ({ quote, author, role, initials }: Testimonial) => {
  return (
    <figure className="h-full bg-[var(--color-bg-light)] rounded-2xl p-8 flex flex-col gap-6 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.1)] hover:shadow-[0_12px_40px_-8px_rgba(15,23,42,0.15)] transition-shadow">
      <FaQuoteLeft
        className="w-8 h-8 text-[var(--color-main-yellow)] shrink-0"
        aria-hidden="true"
      />

      <blockquote className="flex-1">
        <p
          className="text-[var(--color-gray-medium)] leading-relaxed text-sm"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          {quote}
        </p>
      </blockquote>

      <figcaption className="flex items-center gap-4">
        <div
          className="w-11 h-11 rounded-full bg-[var(--color-main-yellow)] flex items-center justify-center shrink-0"
          aria-hidden="true"
        >
          <span
            className="text-sm font-bold text-[var(--color-main-dark)]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {initials}
          </span>
        </div>
        <div>
          <cite
            className="not-italic font-semibold text-sm text-[var(--color-main-dark)] block"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            {author}
          </cite>
          <p
            className="text-xs text-[var(--color-gray-medium)]"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            {role}
          </p>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
