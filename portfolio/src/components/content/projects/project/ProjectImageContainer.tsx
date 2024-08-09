import { useState } from "react";

interface Props {
  src: string;
  alt: string;
}
const ProjectImageComponent = ({ src, alt }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <img
      className="project-image"
      onLoad={handleImageLoad}
      src={src}
      alt={alt}
      style={{
        opacity: isLoading ? 0 : 1,
        borderRadius: "10px",
        height: "220px",
        width: "350px",
        zIndex: 1,
        position: "relative",
        transition: "z-index 0.3s, opacity 0.3s",
      }}
    />
  );
};

export default ProjectImageComponent;
