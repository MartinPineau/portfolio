import { useState } from "react";
import type { Project } from "../context/ProjectsContext";
import { useProjects } from "../context/ProjectsContext";
import FormInput from "./FormInput";
import Button from "./Button";

type Props = {
  project: Project;
  onClose: () => void;
};

const EditProjectModal = ({ project, onClose }: Props) => {
  const { updateProject } = useProjects();

  const [form, setForm] = useState({
    title: project.title,
    description: project.description,
    image: project.image,
    href: project.href,
  });

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProject(project.id, form);
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
          Edit project
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <FormInput
            label="Title"
            type="text"
            value={form.title}
            onChange={handleChange("title")}
          />
          <FormInput
            label="Description"
            multiline
            value={form.description}
            onChange={handleChange("description")}
          />
          <FormInput
            label="Image URL"
            type="text"
            value={form.image}
            onChange={handleChange("image")}
          />
          <FormInput
            label="Link"
            type="text"
            value={form.href}
            onChange={handleChange("href")}
          />

          <div className="flex justify-end gap-3 mt-2">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProjectModal;
