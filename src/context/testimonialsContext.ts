import { createContext } from "react";
import { type Testimonial } from "../types";

export type TestimonialsContextType = {
  testimonials: Testimonial[];
  toggleVisibility: (id: string) => void;
};

export type TestimonialsAction = { type: "TOGGLE_VISIBILITY"; payload: string };

export const TestimonialsContext =
  createContext<TestimonialsContextType | null>(null);
