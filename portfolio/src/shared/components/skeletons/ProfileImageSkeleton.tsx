import { Skeleton } from "@mui/material";
import React from "react";

const ProfileImageSkeleton = () => {
  return (
    <Skeleton
      variant="circular"
      sx={{
        bgcolor: "grey.500",
        maxWidth: "300px",
        maxHeight: "300px",
        width: "100vw",
        height: "100vh",
      }}
      animation="wave"
    />
  );
};

export default ProfileImageSkeleton;
