import { Theme } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Description = styled.p<{ theme: Theme }>`
  z-index: 10;
  text-align: center;
  width: 90%;
  color: ${(props) => props.theme.palette.secondary.main};
`;
export const ServicesContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.values.lg}px) {
    flex-direction: row;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.xl}px) {
    flex-direction: row;
  }
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

export const SingleServiceContainer = styled.div<{ theme: Theme }>`
  font-family: Inter;

  border-radius: 20px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  z-index: 10;
  max-width: 400px;
  background: rgba(256, 256, 256, 0.1);
  backdrop-filter: blur(10px);
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    background: rgba(256, 256, 256, 0.4);
    box-shadow: 0px 10px 10px 0px rgba(255, 255, 255, 0.1);
  }
  box-shadow: 0px 3px 3px 0px rgba(255, 255, 255, 0.1);

  transition: background 0.5s, transform 0.3s, box-shadow 0.3s ease-in-out;
  -webkit-backdrop-filter: blur(10px);
`;

export const ServiceTitle = styled.header<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: 800;
  font-size: 20px;
  min-height: 70px;
`;
export const ServiceDescription = styled.p<{ theme: Theme }>`
  margin-top: 5px;
  color: ${(props) => props.theme.palette.secondary.main};
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
`;
