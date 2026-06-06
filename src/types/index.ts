import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Titre requis"),
  description: z.string().min(1, "Description requise"),
  image: z.string(),
  href: z.url("Doit être une URL valide"),
  tags: z.array(z.string()).optional(),
});

export const TestimonialSchema = z.object({
  id: z.string(),
  quote: z.string().min(1),
  author: z.string().min(1),
  role: z.string().min(1),
  initials: z.string().min(1).max(3),
  visible: z.boolean(),
});

export const ContactMessageSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Nom requis"),
  email: z.email("Doit être un email valide"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
  sentAt: z.iso.datetime(),
  read: z.boolean(),
});

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.email(),
  avatarUrl: z.url(),
});

export type Project = z.infer<typeof ProjectSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type ContactMessage = z.infer<typeof ContactMessageSchema>;
export type User = z.infer<typeof UserSchema>;
