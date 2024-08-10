import { useState } from "react";
import { ProjectImage } from "./project.styles";
import { useThemeStore } from "theme/useThemeStore";

interface Props {
  src: string;
  alt: string;
}
const ProjectImageComponent = ({ src, alt }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { currentTheme } = useThemeStore();
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <ProjectImage
      theme={currentTheme}
      className="project-image"
      onLoad={handleImageLoad}
      src={src}
      alt={alt}
      isLoading={isLoading}
    />
  );
};

export default ProjectImageComponent;
