import React, { PureComponent } from "react";
import styled from "styled-components";
import BackButton from "../../atoms/BackButton";
import Player from "../Player";
import store from "../../../store";
import axios from "axios";
import { me_endpoint } from "../../../config";

const HeroContainer = styled.div`
  background-image: linear-gradient(#3649b4, #ac2f94);
  height: 40vh;
  width: 100%;
  position: relative;
`;

const UpperContainer = styled.div`
  width: 100%;
  height: 40vh;
  padding: 10px;
  position: relative;
`;

const ContentContainer = styled.div`
  position: absolute;
  padding: 0px 90px 90px 90px;
  bottom: 0;
`;

const PlayerContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0;
`;

const StyledTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: white;
`;

const StyledContent = styled.p`
  color: white;
`;
class Hero extends PureComponent {

  render() {
    const { title = "", content = "", withBackButton = false } = this.props;

    return (
      <HeroContainer>
        <UpperContainer>
          {withBackButton && <BackButton />}
          <ContentContainer withBack={withBackButton}>
            <StyledTitle>{title}</StyledTitle>
            <StyledContent>{content}</StyledContent>
          </ContentContainer>
        </UpperContainer>
      </HeroContainer>
    );
  }
}

export default Hero;
