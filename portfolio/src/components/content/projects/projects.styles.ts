import styled from "styled-components";

export const Container = styled.div`
  gap: 50px;
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 16px;
  padding: 16px;
  margin-top: 30px;
  justify-items: center;
  align-items: center;
`;
export const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 80px;
  margin-left: 30px;
`;
