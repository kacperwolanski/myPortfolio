import { Skeleton } from "@mui/material";
import React from "react";
import SectionSkeleton from "./SectionSkeleton";

const ProjectsSkeleton = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SectionSkeleton />
      <Skeleton
        variant="rectangular"
        sx={{
          bgcolor: "grey.500",
          width: "100%",
          minWidth: "200px",
          textAlign: "center",
          marginTop: "30px",
          height: "200px",
          padding: "20px",
          borderRadius: "15px",
        }}
        animation="wave"
      ></Skeleton>
    </div>
  );
};

export default ProjectsSkeleton;
