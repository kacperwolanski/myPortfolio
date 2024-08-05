import React from "react";
import {
  Description,
  IntroductionContainer,
  NameContainer,
  ProfileImage,
  SubTitle,
} from "./introduction.styles";
import { introductionData } from "shared/constants/introduction";
import { BlurredRectangle } from "@shared/components/BlurredRectangle";

const Introduction = () => {
  const { name, subTitle, description, profileImgUrl } = introductionData;
  return (
    <IntroductionContainer>
      <BlurredRectangle top={-40} left={-400} />
      <ProfileImage src={profileImgUrl} />
      <NameContainer>{name}</NameContainer>
      <SubTitle>{subTitle}</SubTitle>
      <Description>{description}</Description>
    </IntroductionContainer>
  );
};

export default Introduction;
