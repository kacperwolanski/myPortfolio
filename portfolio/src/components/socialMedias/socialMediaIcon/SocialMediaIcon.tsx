import React from "react";
import { IconWrapper } from "./socialMediaIcon.styles";
import { RawLink } from "shared/components/RawLink";
import { useThemeStore } from "theme/useThemeStore";

interface Props {
  children: JSX.Element;
  url: string;
}
const SocialMediaIcon = ({ children, url }: Props) => {
  const { currentTheme } = useThemeStore();
  return (
    <IconWrapper theme={currentTheme}>
      <RawLink to={url} openInNewTab>
        {children}
      </RawLink>
    </IconWrapper>
  );
};

export default SocialMediaIcon;
