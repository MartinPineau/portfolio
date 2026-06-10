import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ProjectSchema, type Project } from "../types";
import { useProjects } from "../hooks/useProjects";
import FormInput from "./FormInput";
import Button from "./Button";

type Props = {
  project?: Project;
  onClose: () => void;
};

const FormSchema = ProjectSchema.omit({ id: true });
type FieldErrors = Partial<Record<keyof z.infer<typeof FormSchema>, string>>;

const emptyForm = { title: "", description: "", image: "", href: "" };

const EditProjectModal = ({ project, onClose }: Props) => {
  const { addProject, updateProject } = useProjects();
  const isNew = !project;

  const [form, setForm] = useState(
    project
      ? { title: project.title, description: project.description, image: project.image, href: project.href }
      : emptyForm,
  );
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
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

    if (isNew) {
      addProject({ id: crypto.randomUUID(), ...result.data });
    } else {
      updateProject({ id: project.id, ...result.data });
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          className="text-2xl font-bold text-[var(--color-main-dark)] mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {isNew ? "New project" : "Edit project"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <FormInput
            label="Title"
            type="text"
            value={form.title}
            onChange={handleChange("title")}
            error={errors.title}
          />
          <FormInput
            label="Description"
            multiline
            value={form.description}
            onChange={handleChange("description")}
            error={errors.description}
          />
          <FormInput
            label="Image URL"
            type="text"
            value={form.image}
            onChange={handleChange("image")}
            error={errors.image}
          />
          <FormInput
            label="Link"
            type="text"
            value={form.href}
            onChange={handleChange("href")}
            error={errors.href}
          />

          <div className="flex justify-end gap-3 mt-2">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {isNew ? "Create" : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProjectModal;
