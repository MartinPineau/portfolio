import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

type ProjectsContextType = {
  projects: Project[];
  updateProject: (id: string, updated: Omit<Project, "id">) => void;
};

const ProjectsContext = createContext<ProjectsContextType | null>(null);

const STORAGE_KEY = "portfolio_projects";

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Project Title 1",
    description: "Short description of the project. You can add more details on the project page.",
    image: img1,
    href: "https://games.deschamps-labs.fr/dashboard",
  },
  {
    id: "2",
    title: "Project Title 2",
    description: "Short description of the project. You can add more details on the project page.",
    image: img2,
    href: "https://games.deschamps-labs.fr/games/19",
  },
  {
    id: "3",
    title: "Project Title 3",
    description: "Short description of the project. You can add more details on the project page.",
    image: img3,
    href: "https://games.deschamps-labs.fr/games/24",
  },
];

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultProjects;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  const updateProject = (id: string, updated: Omit<Project, "id">) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...updated, id } : p))
    );
  };

  return (
    <ProjectsContext.Provider value={{ projects, updateProject }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) throw new Error("useProjects must be used within a ProjectsProvider");
  return context;
};
