import { createContext } from "react";
import { type Project } from "../types";

export type ProjectsContextType = {
  projects: Project[];
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
};

export type ProjectsAction =
  | { type: "ADD"; payload: Project }
  | { type: "UPDATE"; payload: Project }
  | { type: "DELETE"; payload: string };

export const ProjectsContext = createContext<ProjectsContextType | null>(null);
