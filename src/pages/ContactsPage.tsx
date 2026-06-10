import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ContactMessageSchema } from "../types";
import { useContacts } from "../hooks/useContacts";
import Button from "../components/Button";
import FormInput from "../components/FormInput";

const FormSchema = ContactMessageSchema.pick({
  name: true,
  email: true,
  message: true,
});

type FieldErrors = Partial<Record<keyof z.infer<typeof FormSchema>, string>>;

const ContactsPage = () => {
  const { addMessage } = useContacts();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const result = FormSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    addMessage({
      id: crypto.randomUUID(),
      ...result.data,
      sentAt: new Date().toISOString(),
      read: false,
    });

    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setSent(true);
  };

  return (
    <section className="max-w-md mx-auto px-10 py-16">
      {sent ? (
        <div
          className="text-center flex flex-col gap-4"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          <h2
            className="text-2xl font-bold text-[var(--color-main-dark)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Message sent!
          </h2>
          <p className="text-[var(--color-gray-medium)]">
            Thank you for reaching out. I'll get back to you soon.
          </p>
          <div>
            <Button variant="outline" onClick={() => setSent(false)}>
              Send another
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
          <FormInput
            label="Name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />
          <FormInput
            label="Message"
            multiline
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            error={errors.message}
          />

          <div className="flex justify-end">
            <Button variant="primary" type="submit">
              Send
            </Button>
          </div>
        </form>
      )}
    </section>
  );
};

export default ContactsPage;
