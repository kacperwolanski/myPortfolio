import { Skeleton } from "@mui/material";
import React from "react";
import SectionSkeleton from "./SectionSkeleton";

const ProductSkeleton = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Skeleton
          variant="rectangular"
          sx={{
            bgcolor: "grey.500",
            width: "20%",
            minWidth: "200px",
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
            width: "20%",
            minWidth: "200px",
            textAlign: "center",
            marginTop: "30px",
            height: "200px",
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
          width: "40%",
          minWidth: "200px",
          textAlign: "center",
          marginTop: "30px",
          height: "300px",
          padding: "20px",
          borderRadius: "15px",
        }}
        animation="wave"
      />
    </div>
  );
};
const MyServiceSkeleton = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",

        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SectionSkeleton />
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{
            bgcolor: "grey.500",
            width: "20%",
            minWidth: "200px",
            textAlign: "center",
            marginTop: "30px",
            height: "200px",
            padding: "20px",
            borderRadius: "15px",
          }}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          sx={{
            bgcolor: "grey.500",
            width: "20%",
            minWidth: "200px",
            textAlign: "center",
            marginTop: "30px",
            height: "200px",
            padding: "20px",
            borderRadius: "15px",
          }}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          sx={{
            bgcolor: "grey.500",
            width: "20%",
            minWidth: "200px",
            textAlign: "center",
            marginTop: "30px",
            height: "200px",
            padding: "20px",
            borderRadius: "15px",
          }}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          sx={{
            bgcolor: "grey.500",
            width: "20%",
            minWidth: "200px",
            textAlign: "center",
            marginTop: "30px",
            height: "200px",
            padding: "20px",
            borderRadius: "15px",
          }}
          animation="wave"
        />
      </div>

      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </div>
  );
};

export default MyServiceSkeleton;
