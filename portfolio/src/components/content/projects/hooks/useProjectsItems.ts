import { useTranslation } from "react-i18next";

const useProjectsItems = () => {
  const { t: translate } = useTranslation();

  const carpoolingProject = {
    name: translate("projectCarpoolingName"),
    labels: ["All", "Commercial"],
    description: translate("projectCarpoolingDescription"),
    techStack: ["React", "Typescript", "NestJs", "Mui", "Prisma", "WebSockets"],
    githubUrl: "",
    imageUrl:
      "https://github.com/user-attachments/assets/1bdc4ee3-dc86-46f5-86f4-5cfa5f077d89",
  };

  const splitterProject = {
    name: translate("projectSplitterName"),
    labels: ["All", "Personal"],
    description: translate("projectSplitterDescription"),
    techStack: ["IOS", "React Native", "Typescript"],
    githubUrl: "https://github.com/kacperwolanski/smartsplit",
    imageUrl:
      "https://github.com/user-attachments/assets/d5676733-8646-4b99-b175-3465d61ff424",
  };

  const faceRecognitionProject = {
    name: translate("projectPythonName"),
    labels: ["All", "Personal"],
    description: translate("projectPythonDescription"),
    techStack: ["OpenCV", "Python", "Numpy"],
    githubUrl: "https://github.com/kacperwolanski/face_recognition",
    imageUrl:
      "https://github.com/user-attachments/assets/a0dc53ae-cdf2-4735-b60a-97df9c0ff36f",
  };

  const portfolioProject = {
    name: translate("projectResumeName"),
    labels: ["All", "Personal"],
    description: translate("projectResumeDescription"),
    techStack: ["React", "MUI", "Styled Components", "Figma"],
    githubUrl: "https://github.com/kacperwolanski/myPortfolio",
    imageUrl:
      "https://github.com/user-attachments/assets/bedf4dfe-2075-47f9-b088-2cb6552444c7",
  };

  const projectItems = [
    carpoolingProject,
    splitterProject,
    faceRecognitionProject,
    portfolioProject,
  ];

  return { projectItems };
};

export default useProjectsItems;
