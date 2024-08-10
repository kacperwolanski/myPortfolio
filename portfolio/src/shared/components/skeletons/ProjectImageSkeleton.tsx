import { Skeleton } from "@mui/material";
import React from "react";

const ProjectImageSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      sx={{
        bgcolor: "grey.500",
        minHeight: "220px",
        minWidth: "350px",
        height: "100%",
        width: "100%",
        borderRadius: "10px",
      }}
      animation="wave"
    />
  );
};

export default ProjectImageSkeleton;
