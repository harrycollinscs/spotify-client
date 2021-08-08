import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${props => props.primary ? '#1db954' : '#212121' };
  width: 200px;
  height: 50px;
  border-radius: 50px;
  border-style: none;
  color: white;
`;

const CTA = ({ children, action, primary = true }) => <StyledButton primary={primary} onClick={action}>{children}</StyledButton>;

export default CTA;
