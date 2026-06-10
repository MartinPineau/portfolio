import { useContext } from "react";
import { TestimonialsContext } from "../context/testimonialsContext";

export const useTestimonials = () => {
  const context = useContext(TestimonialsContext);
  if (!context)
    throw new Error(
      "useTestimonials must be used within a TestimonialsProvider",
    );
  return context;
};
