import React from "react";
import {
  Description,
  IntroductionContainer,
  NameContainer,
  ProfileImage,
  SubTitle,
} from "./introduction.styles";
import { introductionData } from "shared/constants/introduction";
import { BlurredRectangle } from "shared/components/BlurredRectangle";
import CircledButton from "shared/components/CircledButton";
import theme from "theme/theme";

const Introduction = () => {
  const { name, subTitle, description, profileImgUrl } = introductionData;
  return (
    <IntroductionContainer>
      <BlurredRectangle top={-40} left={-400} />
      <ProfileImage src={profileImgUrl} />
      <NameContainer>{name}</NameContainer>
      <SubTitle>{subTitle}</SubTitle>
      <Description>{description}</Description>
      <CircledButton
        title="Contact Me"
        strokeColor={theme.palette.primary.main}
      />
    </IntroductionContainer>
  );
};

export default Introduction;
