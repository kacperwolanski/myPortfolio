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
      "https://github.com/user-attachments/assets/b7712175-bf8c-4007-9466-d6c2a374b3d0",
  };

  const splitterProject = {
    name: translate("projectSplitterName"),
    labels: ["All", "Personal"],
    description: translate("projectSplitterDescription"),
    techStack: ["IOS", "React Native", "Typescript"],
    githubUrl: "https://github.com/kacperwolanski/smartsplit",
    imageUrl:
      "https://github.com/user-attachments/assets/c3b83510-fc06-4978-9d9a-d76abbaafca1",
  };

  const faceRecognitionProject = {
    name: translate("projectPythonName"),
    labels: ["All", "Personal"],
    description: translate("projectPythonDescription"),
    techStack: ["OpenCV", "Python", "Numpy"],
    githubUrl: "https://github.com/kacperwolanski/face_recognition",
    imageUrl:
      "https://github.com/user-attachments/assets/1bcf2355-dc68-4bbc-b816-de5c5839da35",
  };

  const portfolioProject = {
    name: translate("projectResumeName"),
    labels: ["All", "Personal"],
    description: translate("projectResumeDescription"),
    techStack: ["React", "MUI", "Styled Components", "Figma"],
    githubUrl: "https://github.com/kacperwolanski/myPortfolio",
    imageUrl:
      "https://github.com/user-attachments/assets/28189279-a886-41f7-96a5-4d63bc9ee7dd",
  };

  const projectItems = [
    faceRecognitionProject,
    splitterProject,

    portfolioProject,
    carpoolingProject,
  ];

  return { projectItems };
};

export default useProjectsItems;