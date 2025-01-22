import { useTranslation } from "react-i18next";

const useProjectsItems = () => {
  const { t: translate } = useTranslation();

  const carpoolingProject = {
    name: translate("projectCarpoolingName"),
    labels: ["All", "Commercial"],
    description: translate("projectCarpoolingDescription"),
    techStack: ["React", "Typescript", "NestJs", "MUI", "Prisma", "WebSockets"],
    githubUrl: "https://turmsride.com/",
    imageUrl:
      "https://github.com/user-attachments/assets/a99c78e9-2ce5-46e7-896b-cc0b8b8a92b3",
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
      "https://github.com/user-attachments/assets/ca01181f-bbd2-4537-89a9-d13e38ede27e",
  };

  const portfolioProject = {
    name: translate("projectResumeName"),
    labels: ["All", "Personal"],
    description: translate("projectResumeDescription"),
    techStack: ["React", "MUI", "Styled Components", "Figma", "Typescript"],
    githubUrl: "https://github.com/kacperwolanski/myPortfolio",
    imageUrl:
      "https://github.com/user-attachments/assets/28189279-a886-41f7-96a5-4d63bc9ee7dd",
  };

  const dottvProject = {
    name: translate("projectDotTvName"),
    labels: ["All", "Commercial"],
    description: translate("projectDotTvDescription"),
    techStack: ["React", "MUI", "CI/CD", "Figma", "Typescript"],
    githubUrl: "https://www.dottv.app/",
    imageUrl:
      "https://github.com/user-attachments/assets/b4a2f68d-4bbb-4b66-a053-7ab60893f9c8",
  };

  const motoAdviserProject = {
    name: translate("projectMotoAdvisorName"),
    labels: ["All", "Commercial"],
    description: translate("projectMotoAdvisorDescription"),
    techStack: ["Wordpress", "Elementor", "Yoast SEO"],
    githubUrl: "https://kiliauto.pl/",
    imageUrl:
      "https://github.com/user-attachments/assets/9cc39662-fff7-4d8d-a70d-661d00a91c48",
  };

  const projectItems = [
    faceRecognitionProject,
    splitterProject,

    portfolioProject,
    carpoolingProject,
    dottvProject,
    motoAdviserProject,
  ];

  return { projectItems };
};

export default useProjectsItems;
