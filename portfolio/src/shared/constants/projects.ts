import { ProjectLabel } from "./types";

export const projects = [
  {
    name: "Carpooling web app",
    labels: ["All", "Commercial"],
    description:
      "This is my full-stack commercial project, designed to help people reduce car journey expenses by facilitating carpooling. I was leader of small team of developers.",
    techStack: ["React", "Typescript", "NestJs", "Mui", "Prisma", "WebSockets"],
    githubUrl: "",
    imageUrl:
      "https://github.com/user-attachments/assets/1bdc4ee3-dc86-46f5-86f4-5cfa5f077d89",
  },
  {
    name: "Costs spliter mobile app",
    labels: ["All", "Personal"],
    description:
      "This is a mobile app, created to divide costs between members of a group of friends.",
    techStack: ["IOS", "React Native", "Typescript"],
    githubUrl: "https://github.com/kacperwolanski/smartsplit",
    imageUrl:
      "https://github.com/user-attachments/assets/d5676733-8646-4b99-b175-3465d61ff424",
  },
  {
    name: "Face recognition Python app",
    labels: ["All", "Personal"],
    description:
      "This is my engineering diploma thesis. App uses database of images to recognise people in static images or in real-time computer web camera image.",
    techStack: ["OpenCV", "Python", "Numpy"],
    githubUrl: "https://github.com/kacperwolanski/face_recognition",
    imageUrl:
      "https://github.com/user-attachments/assets/a0dc53ae-cdf2-4735-b60a-97df9c0ff36f",
  },
  {
    name: "Portfolio",
    labels: ["All", "Personal"],
    description: "Project of this website, self designed with Figma.",
    techStack: ["React", "MUI", "Styled Components", "Figma"],
    githubUrl: "https://github.com/kacperwolanski/myPortfolio",
    imageUrl:
      "https://github.com/user-attachments/assets/bedf4dfe-2075-47f9-b088-2cb6552444c7",
  },
];

export const projectsLabels: ProjectLabel[] = ["All", "Personal", "Commercial"];
