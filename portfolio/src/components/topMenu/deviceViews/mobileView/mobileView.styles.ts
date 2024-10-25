import { Theme } from "@mui/material";
import styled from "styled-components";

export const LogoWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`;
export const SideMenuContent = styled.div<{ currentTheme: any }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  transition: 5s;
  transition: background-color 0.4s ease;
  background-color: rgba(
    ${(props) => props.currentTheme.palette.custom.background},
    1
  );
`;

export const BottomSection = styled.div<{ theme: Theme }>`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  gap: 40px;
  flex-grow: 1;
`;

export const DividerWrapper = styled.div<{ theme: Theme }>`
  justify-content: space-evenly;
  padding: 40px;
  align-items: center;
  display: flex;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.palette.custom.borderGray};
  gap: 20px;
  margin-top: auto;
  margin-bottom: 10px;
`;
