import { useReducer, useEffect, type ReactNode } from "react";
import { TestimonialSchema, type Testimonial } from "../types";
import {
  TestimonialsContext,
  type TestimonialsAction,
} from "./testimonialsContext";
import { z } from "zod";

const STORAGE_KEY = "portfolio_testimonials";

const defaultTestimonials: Testimonial[] = [
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

function testimonialsReducer(
  state: Testimonial[],
  action: TestimonialsAction,
): Testimonial[] {
  switch (action.type) {
    case "TOGGLE_VISIBILITY":
      return state.map((t) =>
        t.id === action.payload ? { ...t, visible: !t.visible } : t,
      );
  }
}

function getInitialTestimonials(): Testimonial[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return defaultTestimonials;
  const result = z.array(TestimonialSchema).safeParse(JSON.parse(stored));
  return result.success ? result.data : defaultTestimonials;
}

export const TestimonialsProvider = ({ children }: { children: ReactNode }) => {
  const [testimonials, dispatch] = useReducer(
    testimonialsReducer,
    undefined,
    getInitialTestimonials,
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonials));
  }, [testimonials]);

  const toggleVisibility = (id: string) =>
    dispatch({ type: "TOGGLE_VISIBILITY", payload: id });

  return (
    <TestimonialsContext.Provider value={{ testimonials, toggleVisibility }}>
      {children}
    </TestimonialsContext.Provider>
  );
};
