import { useParams, Navigate, Link } from "react-router";
import { useProjects } from "../hooks/useProjects";
import Button from "../components/Button";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { projects } = useProjects();

  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <article>
      {/* Hero pleine largeur */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col justify-end px-10 pb-12 max-w-5xl mx-auto">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-main-yellow)] text-[var(--color-main-dark)]"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {project.title}
          </h1>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-5xl mx-auto px-10 py-16">
        <Link
          to="/projects"
          className="text-sm text-[var(--color-gray-medium)] hover:text-[var(--color-main-dark)] transition-colors mb-10 inline-block"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          ← Back to projects
        </Link>

        <p
          className="text-lg text-[var(--color-gray-medium)] leading-relaxed mb-10 max-w-2xl"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          {project.description}
        </p>

        <a href={project.href} target="_blank" rel="noopener noreferrer">
          <Button variant="pill-outline">View Project</Button>
        </a>
      </div>
    </article>
  );
};

export default ProjectDetailPage;
