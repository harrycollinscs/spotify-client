import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background-image: linear-gradient(#3649B4, #AC2F94);
  height: 40vh;
  width: 100%;
  padding: 100px;
`;

const StyledTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: white;
`;

const StyledContent = styled.p`
  color: white;
`;

const Hero = ({ title = "", content = "" }) => (
  <HeroContainer>
    <StyledTitle>{title}</StyledTitle>
    <StyledContent>{content}</StyledContent>
  </HeroContainer>
);

export default Hero;