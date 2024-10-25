import { engLanguageKeyword, plLanguageKeyword } from "shared/i18n/i18n";

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

export type Language = typeof plLanguageKeyword | typeof engLanguageKeyword;
