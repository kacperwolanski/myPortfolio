import { Skeleton } from "@mui/material";
import React from "react";
import SectionSkeleton from "./SectionSkeleton";

const ContactSkeleton = () => {
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
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <span>loading contact...</span>
        <span>mail: wolanski055@gmail.com</span>
        <span>tel: +48 796 082 796</span>
      </div>
    </div>
  );
};

export default ContactSkeleton;
