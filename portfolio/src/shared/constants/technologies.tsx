import { Technology } from "components/content/technologies/components/SingleTechnology";
import {
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  NestJSIcon,
  PostgreSQLIcon,
  WordPressIcon,
  GitHubIcon,
  NextJSIcon,
  FigmaIcon,
  TailwindIcon,
  MaterialUIIcon,
} from "../assets/icons/Icons";

export const myTechnologiesList: Technology[] = [
  {
    icon: <JavascriptIcon />,
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <TypescriptIcon />,
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  { icon: <ReactIcon />, title: "React", link: "https://react.dev/" },
  { icon: <NestJSIcon />, title: "NestJS", link: "https://nestjs.com/" },
  {
    icon: <PostgreSQLIcon />,
    title: "PostgreSQL",
    link: "https://www.postgresql.org/",
  },
  {
    icon: <WordPressIcon />,
    title: "WordPress",
    link: "https://wordpress.org/",
  },
  { icon: <GitHubIcon />, title: "GitHub", link: "https://github.com/" },
  { icon: <NextJSIcon />, title: "Next.js", link: "https://nextjs.org/" },
  { icon: <FigmaIcon />, title: "Figma", link: "https://www.figma.com/" },
  {
    icon: <TailwindIcon />,
    title: "Tailwind",
    link: "https://tailwindcss.com/",
  },
  { icon: <MaterialUIIcon />, title: "Material UI", link: "https://mui.com/" },
];
