import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

export type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const projects: Project[] = [
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
  },
];
