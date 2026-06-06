import { type Project } from "../types";
import Button from "./Button";

type ProjectCardProps = Pick<Project, "title" | "description" | "image" | "href"> & {
  imagePosition?: "left" | "right";
};

const ProjectCard = ({
  title,
  description,
  image,
  imagePosition = "right",
  href,
}: ProjectCardProps) => {
  const imageFirst = imagePosition === "right";

  return (
    <article className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(15,23,42,0.25)] w-full max-w-5xl md:h-[500px]">
      <div
        className={`w-full md:w-1/2 flex items-center px-10 py-8 md:py-0 ${
          imageFirst ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="w-full">
          <h3
            className="text-3xl font-bold text-[var(--color-main-dark)] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {title}
          </h3>

          <p
            className="text-base text-[var(--color-gray-medium)] leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            {description}
          </p>

          <div style={{ fontFamily: "var(--font-roboto)" }}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Button variant="pill-outline">View Project</Button>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`w-full md:w-1/2 ${imageFirst ? "md:order-1" : "md:order-2"}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </article>
  );
};

export default ProjectCard;
