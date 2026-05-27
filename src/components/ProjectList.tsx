import { useProjects } from "../context/ProjectsContext";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const { projects } = useProjects();

  return (
    <div className="flex flex-col gap-16 items-center max-w-5xl mx-auto">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          imagePosition={index % 2 === 0 ? "left" : "right"}
          href={project.href}
        />
      ))}
    </div>
  );
};

export default ProjectList;
