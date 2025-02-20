import { Skeleton } from "@mui/material";
import React from "react";

const SectionSkeleton = () => {
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
      <Skeleton
        variant="rectangular"
        sx={{
          bgcolor: "grey.500",
          width: "400px",
          height: "50px",
          borderRadius: "15px",
        }}
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        sx={{
          bgcolor: "grey.500",
          width: "200px",
          height: "30px",
          borderRadius: "15px",
        }}
        animation="wave"
      />
    </div>
  );
};

export default SectionSkeleton;
