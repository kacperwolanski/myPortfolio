import React from "react";
import { useThemeStore } from "theme/useThemeStore";

interface Props {
  header: string;
  focusedPart: string;
}
const ProductHeader = ({ header, focusedPart }: Props) => {
  const { currentTheme } = useThemeStore();
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: currentTheme.palette.custom.header,
          width: "100%",
          fontWeight: 600,
          letterSpacing: "-2.2px",
          lineHeight: "1.1",
          fontSize: "40px",
          maxWidth: "400px",
        }}
      >
        <span style={{ opacity: 0.4 }}>{header}</span>
        <span>{focusedPart}</span>
      </div>
    </div>
  );
};

export default ProductHeader;
