import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #1db954;
  width: 200px;
  height: 50px;
  border-radius: 50px;
  border-style: none;
  color: white;
`;

const CTA = ({ children, action }) => <StyledButton onClick={action}>{children}</StyledButton>;

export default CTA;
