import React, { ReactNode } from "react";
import { Link as MuiLink } from "@mui/material";

interface Props {
  to: string;
  children: ReactNode;
  onClick?: () => void;
  dataTestId?: string;
  isDisabled?: boolean;
}

const RawLink = ({ to, children, onClick, dataTestId, isDisabled }: Props) => {
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
          data-testid={dataTestId}
        >
          {children}
        </MuiLink>
      )}
    </>
  );
};

export { RawLink };
