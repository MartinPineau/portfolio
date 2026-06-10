import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useTestimonials } from "../hooks/useTestimonials";

const AdminTestimonialsPage = () => {
  const { testimonials, toggleVisibility } = useTestimonials();

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-16">
      <h1
        className="text-3xl font-bold text-[var(--color-main-dark)] mb-10"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Testimonials
      </h1>

      <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
        <table
          className="w-full text-sm"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          <thead>
            <tr className="border-b border-[var(--color-gray-light)] text-left text-[var(--color-gray-medium)]">
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Author</th>
              <th className="px-6 py-4 font-semibold">Role</th>
              <th className="px-6 py-4 font-semibold">Quote</th>
              <th className="px-6 py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial) => (
              <tr
                key={testimonial.id}
                className={`border-b border-[var(--color-gray-light)] last:border-0 transition-colors ${
                  testimonial.visible ? "" : "opacity-60"
                }`}
              >
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      testimonial.visible
                        ? "bg-[var(--color-main-yellow)]/20 text-[var(--color-main-dark)]"
                        : "bg-[var(--color-gray-light)] text-[var(--color-gray-medium)]"
                    }`}
                  >
                    {testimonial.visible ? "Visible" : "Hidden"}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold text-[var(--color-main-dark)] whitespace-nowrap">
                  {testimonial.author}
                </td>
                <td className="px-6 py-4 text-[var(--color-gray-medium)] whitespace-nowrap">
                  {testimonial.role}
                </td>
                <td className="px-6 py-4 text-[var(--color-gray-medium)] max-w-xs truncate">
                  {testimonial.quote}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleVisibility(testimonial.id)}
                    className="p-2 rounded-lg text-[var(--color-main-dark)] hover:bg-[var(--color-gray-light)] cursor-pointer transition-colors"
                    title={testimonial.visible ? "Hide" : "Show"}
                    aria-label={testimonial.visible ? "Hide" : "Show"}
                  >
                    {testimonial.visible ? (
                      <FaEyeSlash className="w-4 h-4" />
                    ) : (
                      <FaEye className="w-4 h-4" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTestimonialsPage;
