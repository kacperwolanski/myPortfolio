import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-color: #f8f9fa;
`;

const Title = styled.h1`
  color: #343a40;
  font-weight: 400;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Title>Kacper Wolański</Title>
    </Container>
  );
};

export default App;
