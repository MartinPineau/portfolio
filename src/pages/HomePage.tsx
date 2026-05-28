import Intro from "../components/Intro";
import ProjectList from "../components/ProjectList";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <>
      <Intro />
      <section id="projects" className="px-10 py-16">
        <h2
          className="relative w-fit mx-auto text-4xl font-bold text-[var(--color-main-dark)] mb-12 pb-2.5 before:content-[''] before:absolute before:w-1/2 before:h-[3px] before:bottom-0 before:left-1/4 before:bg-[var(--color-main-yellow)]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          My Projects
        </h2>
        <ProjectList />
      </section>
      <Testimonials />
    </>
  );
};

export default HomePage;
