import { useState } from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { useProjects, type Project } from "../context/ProjectsContext";
import EditProjectModal from "../components/EditProjectModal";

const ProjectImage = ({ project }: { project: Project }) =>
  project.image ? (
    <img src={project.image} alt={project.title} className="w-16 h-12 object-cover rounded-lg" />
  ) : (
    <div className="w-16 h-12 rounded-lg bg-[var(--color-gray-light)]" />
  );

const DashboardPage = () => {
  const { projects, deleteProject } = useProjects();
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const handleDelete = (project: Project) => {
    if (window.confirm(`Supprimer "${project.title}" ?`)) {
      deleteProject(project.id);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-16">
      <h1
        className="text-3xl font-bold text-[var(--color-main-dark)] mb-10"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Dashboard
      </h1>

      <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm" style={{ fontFamily: "var(--font-nunito)" }}>
          <thead>
            <tr className="border-b border-[var(--color-gray-light)] text-left text-[var(--color-gray-medium)]">
              <th className="px-6 py-4 font-semibold">Image</th>
              <th className="px-6 py-4 font-semibold">Title</th>
              <th className="px-6 py-4 font-semibold">Description</th>
              <th className="px-6 py-4 font-semibold">Link</th>
              <th className="px-6 py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-b border-[var(--color-gray-light)] last:border-0 hover:bg-[var(--color-bg-light)] transition-colors"
              >
                <td className="px-6 py-4"><ProjectImage project={project} /></td>
                <td className="px-6 py-4 font-semibold text-[var(--color-main-dark)] whitespace-nowrap">{project.title}</td>
                <td className="px-6 py-4 text-[var(--color-gray-medium)] max-w-xs truncate">{project.description}</td>
                <td className="px-6 py-4 text-[var(--color-gray-medium)] whitespace-nowrap">{project.href}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setEditingProject(project)}
                      className="p-2 rounded-lg text-[var(--color-main-dark)] hover:bg-[var(--color-gray-light)] cursor-pointer transition-colors"
                    >
                      <FaPencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(project)}
                      className="p-2 rounded-lg text-red-500 hover:bg-red-100 cursor-pointer transition-colors"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingProject && (
        <EditProjectModal
          project={editingProject}
          onClose={() => setEditingProject(null)}
        />
      )}
    </div>
  );
};

export default DashboardPage;
