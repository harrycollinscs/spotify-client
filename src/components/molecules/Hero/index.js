import React from "react";
import styled from "styled-components";
import BackButton from "../../atoms/BackButton";

const HeroContainer = styled.div`
  background-image: linear-gradient(#3649b4, #ac2f94);
  height: 40vh;
  width: 100%;
  padding: 10px;
  position: relative;
`;

const ContentContainer = styled.div`
  position: absolute;
  padding: 0px 90px 90px 90px;
  bottom: 0;
`;

const StyledTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: white;
`;

const StyledContent = styled.p`
  color: white;
`;

const Hero = ({ title = "", content = "", withBackButton = false}) => (
  <HeroContainer>
    { withBackButton && <BackButton /> }
    <ContentContainer withBack={withBackButton}>
      <StyledTitle>{title}</StyledTitle>
      <StyledContent>{content}</StyledContent>
    </ContentContainer>
  </HeroContainer>
);

export default Hero;
