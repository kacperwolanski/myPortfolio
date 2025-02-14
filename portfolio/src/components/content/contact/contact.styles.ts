import { Theme } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
export const EmailContainer = styled.div<{ theme: Theme }>`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.palette.custom.darkGray};
  padding: 20px 10px;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const PageContainer = styled.div<{ theme: Theme }>`
  background: ${(props) => `rgba(${props.theme.palette.custom.background})`};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-top: -20px;
`;

export const Email = styled.span<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.secondary.dark};
  font-size: 14px;
  @media (min-width: ${(props) => props.theme.breakpoints.values.xxs}px) {
    font-size: 14px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xs}px) {
    font-size: 14px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    font-size: 16px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 16px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    font-size: 18px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    font-size: 18px;
  }
`;
export const MainLink = styled.a`
  text-decoration: none;
`;

export const PhoneNumber = styled.span<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.custom.header};
`;

export const PhoneNumberContainer = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  border-radius: 15px;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
  }
  border: 2px solid ${(props) => props.theme.palette.custom.darkGray};
`;

export const CopyButton = styled.button<{ theme: Theme }>`
  border: none;
  background: transparent;
  cursor: pointer;
  color: white;
`;

export const CopyInfo = styled.span<{ isVisible: boolean }>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  color: white;
  transition: opacity 0.3s;
  padding: 5px;
`;
