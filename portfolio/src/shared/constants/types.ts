export interface SkillSet {
  title: string;
  skills: string[];
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  imageUrl: string;
}

export type ProjectLabel = "All" | "Personal" | "Commercial";
