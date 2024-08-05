import React from "react";
import styled from "styled-components";
import theme from "theme/theme";

const Contact = styled.span`
  border: 1px solid ${theme.palette.primary.main};
  color: white;
  border-radius: 5px;
  padding: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
`;

const ContactButton = () => {
  return <Contact>Contact Me</Contact>;
};

export default ContactButton;
