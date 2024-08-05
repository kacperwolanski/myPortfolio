import styled from "styled-components";
import theme from "theme/theme";

export const IntroductionContainer = styled.div`
  margin-top: 200px;
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;
export const NameContainer = styled.h1`
  color: white;
  font-size: 63px;
  font-weight: 900;
  letter-spacing: -3px;
`;

export const SubTitle = styled.h1`
  color: ${theme.palette.primary.main};
  font-size: 26px;
  position: relative;
  top: -60px;
  font-weight: 500;
`;

export const Description = styled.p`
  margin-top: -60px;
  text-align: center;
  color: ${theme.palette.secondary.main};
`;
