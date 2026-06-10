import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ProjectSchema, type Project } from "../types";
import { useProjects } from "../hooks/useProjects";
import FormInput from "./FormInput";
import Button from "./Button";
import TagInput from "./TagInput";
import ImageField from "./ImageField";
import ProjectPreview from "./ProjectPreview";

type Props = {
  project?: Project;
  onClose: () => void;
};

const FormSchema = ProjectSchema.omit({ id: true });
type FieldErrors = Partial<Record<keyof z.infer<typeof FormSchema>, string>>;

type FormState = {
  title: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
};

const emptyForm: FormState = {
  title: "",
  description: "",
  image: "",
  href: "",
  tags: [],
};

const EditProjectModal = ({ project, onClose }: Props) => {
  const { addProject, updateProject } = useProjects();
  const isNew = !project;

  const [form, setForm] = useState<FormState>(
    project
      ? {
          title: project.title,
          description: project.description,
          image: project.image,
          href: project.href,
          tags: project.tags ?? [],
        }
      : emptyForm,
  );
  const [errors, setErrors] = useState<FieldErrors>({});

  const setField = (field: keyof FormState, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setField(field, e.target.value);

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          className="text-2xl font-bold text-[var(--color-main-dark)] mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {isNew ? "New project" : "Edit project"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="flex flex-col gap-5">
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
              rows={4}
              value={form.description}
              onChange={handleChange("description")}
              error={errors.description}
            />
            <ImageField
              value={form.image}
              onChange={(image) => setField("image", image)}
              error={errors.image}
            />
            <TagInput
              tags={form.tags}
              onChange={(tags) => setField("tags", tags)}
            />
            <FormInput
              label="Link"
              type="text"
              value={form.href}
              onChange={handleChange("href")}
              error={errors.href}
            />
          </div>

          <ProjectPreview
            title={form.title}
            description={form.description}
            image={form.image}
            tags={form.tags}
          />

          <div className="md:col-span-2 flex justify-end gap-3 mt-2">
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
