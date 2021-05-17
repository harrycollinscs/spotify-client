import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid white;
  margin: 0px 30px;
`;

const CircleImage = ({ url }) => <StyledImage src={url} />;

export default CircleImage;
