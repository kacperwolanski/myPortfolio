import styled from "styled-components";

interface TopMenuContainerProps {
  isHidden: boolean;
}

export const TopMenuContainer = styled.div<TopMenuContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  transform: ${({ isHidden }) =>
    isHidden ? "translateY(-100%)" : "translateY(0)"};
  z-index: 1000;
  box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
`;

export const TopMenuButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;
