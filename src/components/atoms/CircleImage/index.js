import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: ${(props) => props.dimensions};
  height: ${(props) => props.dimensions};
  border-radius: ${(props) => props.dimensions};
  border: 1px solid white;
  margin: 0px 30px;
`;

const CircleImage = ({ url, size = "small" }) => {
  const dimensions = size === "medium" ? '100px' : size === "large" ? '200px' : '50px';

  return (
    <StyledImage dimensions={dimensions} src={url} />
  )
};

export default CircleImage;
