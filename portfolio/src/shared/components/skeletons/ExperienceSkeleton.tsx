import { Skeleton } from "@mui/material";
import React from "react";
import SectionSkeleton from "./SectionSkeleton";

const ExperienceSkeleton = () => {
  return (
    <div
      style={{
        width: "70%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <SectionSkeleton />
      <div
        style={{
          width: "100%",
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          padding: "20px",
        }}
      >
        <div>
          <Skeleton
            variant="rectangular"
            sx={{
              bgcolor: "grey.500",
              width: "150px",
              textAlign: "center",
              marginTop: "30px",
              height: "50px",
              padding: "20px",
              borderRadius: "15px",
            }}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            sx={{
              bgcolor: "grey.500",
              width: "150px",
              textAlign: "center",
              marginTop: "30px",
              height: "50px",
              padding: "20px",
              borderRadius: "15px",
            }}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            sx={{
              bgcolor: "grey.500",
              width: "150px",
              textAlign: "center",
              marginTop: "30px",
              height: "50px",
              padding: "20px",
              borderRadius: "15px",
            }}
            animation="wave"
          />
        </div>
        <Skeleton
          variant="rectangular"
          sx={{
            bgcolor: "grey.500",
            width: "100%",
            minWidth: "400px",
            textAlign: "center",
            marginTop: "30px",
            height: "200px",
            padding: "20px",
            borderRadius: "15px",
          }}
          animation="wave"
        />
      </div>
    </div>
  );
};

export default ExperienceSkeleton;
