import { useReducer, useEffect, type ReactNode } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { ProjectSchema, type Project } from "../types";
import { ProjectsContext, type ProjectsAction } from "./projectsContext";
import { z } from "zod";

const STORAGE_KEY = "portfolio_projects";

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Project Title 1",
    description:
      "Short description of the project. You can add more details on the project page.",
    image: img1,
    href: "https://games.deschamps-labs.fr/dashboard",
  },
  {
    id: "2",
    title: "Project Title 2",
    description:
      "Short description of the project. You can add more details on the project page.",
    image: img2,
    href: "https://games.deschamps-labs.fr/games/19",
  },
  {
    id: "3",
    title: "Project Title 3",
    description:
      "Short description of the project. You can add more details on the project page.",
    image: img3,
    href: "https://games.deschamps-labs.fr/games/24",
  },
];

function projectsReducer(state: Project[], action: ProjectsAction): Project[] {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((p) =>
        p.id === action.payload.id ? action.payload : p,
      );
    case "DELETE":
      return state.filter((p) => p.id !== action.payload);
  }
}

function getInitialProjects(): Project[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return defaultProjects;
  const result = z.array(ProjectSchema).safeParse(JSON.parse(stored));
  return result.success ? result.data : defaultProjects;
}

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, dispatch] = useReducer(
    projectsReducer,
    undefined,
    getInitialProjects,
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  const addProject = (project: Project) =>
    dispatch({ type: "ADD", payload: project });
  const updateProject = (project: Project) =>
    dispatch({ type: "UPDATE", payload: project });
  const deleteProject = (id: string) =>
    dispatch({ type: "DELETE", payload: id });

  return (
    <ProjectsContext.Provider
      value={{ projects, addProject, updateProject, deleteProject }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
