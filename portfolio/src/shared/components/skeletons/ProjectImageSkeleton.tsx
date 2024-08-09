import { Skeleton } from "@mui/material";
import React from "react";

const ProjectImageSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      sx={{
        bgcolor: "grey.500",
        height: "220px",
        width: "350px",
        borderRadius: "10px",
      }}
      animation="wave"
    />
  );
};

export default ProjectImageSkeleton;
