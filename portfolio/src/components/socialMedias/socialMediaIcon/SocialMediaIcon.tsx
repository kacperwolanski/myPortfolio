import React from "react";
import { IconWrapper } from "./socialMediaIcon.styles";
import { RawLink } from "shared/components/RawLink";

interface Props {
  children: JSX.Element;
  url: string;
}
const SocialMediaIcon = ({ children, url }: Props) => {
  return (
    <IconWrapper>
      <RawLink to={url}>{children}</RawLink>
    </IconWrapper>
  );
};

export default SocialMediaIcon;
