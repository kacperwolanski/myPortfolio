import React, { ReactNode } from "react";
import { Link as MuiLink } from "@mui/material";

interface Props {
  to: string;
  children: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  openInNewTab?: boolean;
}

const RawLink = ({
  to,
  children,
  onClick,
  isDisabled,
  openInNewTab,
}: Props) => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  const handleLinkClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      {isDisabled ? (
        <>{children}</>
      ) : (
        <MuiLink
          href={to}
          style={linkStyle}
          onClick={handleLinkClick}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
        >
          {children}
        </MuiLink>
      )}
    </>
  );
};

export { RawLink };
