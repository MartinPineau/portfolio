import ProjectList from "../components/ProjectList";

const ProjectsPage = () => {
  return (
    <section className="px-10 py-16">
      <h1
        className="relative w-fit mx-auto text-4xl font-bold text-[var(--color-main-dark)] mb-12 pb-2.5 before:content-[''] before:absolute before:w-1/2 before:h-[3px] before:bottom-0 before:left-1/4 before:bg-[var(--color-main-yellow)]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        My Projects
      </h1>
      <ProjectList />
    </section>
  );
};

export default ProjectsPage;
