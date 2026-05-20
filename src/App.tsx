import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import imageTopRight from "./assets/ImageTopRight.png";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";

const projects = [
  {
    title: "Project Title 1",
    description:
      "Short description of the project. You can add more details on the project page.",
    image: img1,
    href: "#",
  },
  {
    title: "Project Title 2",
    description:
      "Short description of the project. You can add more details on the project page.",
    image: img2,
    href: "#",
  },
  {
    title: "Project Title 3",
    description:
      "Short description of the project. You can add more details on the project page.",
    image: img3,
    href: "#",
  }
];

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--color-bg-light)]">
      <img
        src={imageTopRight}
        alt=""
        className="absolute top-0 right-0 w-[55%] max-w-[600px] h-auto pointer-events-none select-none"
      />
      <div className="relative">
        <Navbar />
        <Intro />
        <section id="projects" className="px-10 py-16">
          <h2
            className="relative w-fit mx-auto text-4xl font-bold text-[var(--color-main-dark)] mb-12 pb-2.5 before:content-[''] before:absolute before:w-1/2 before:h-[3px] before:bottom-0 before:left-1/4 before:bg-[var(--color-main-yellow)] "
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            My Projects
          </h2>
          <div className="flex flex-col gap-16 items-center max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                imagePosition={index % 2 === 0 ? "left" : "right"}
                href={project.href}
              />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
