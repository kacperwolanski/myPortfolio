import styled from "styled-components";
import { Theme } from "@mui/material";

export const Container = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  padding: 50px 50px 10px 50px;
  border-top: 1px solid ${(props) => props.theme.palette.custom.borderGray};
`;

export const LogoButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Signature = styled.span<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.secondary.main};
  text-align: center;
  font-size: 16px;
  font-family: "Inter";
  font-weight: 200;
`;
