import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { full_auth_url } from "../../../config";
import CTA from "../../atoms/CTA";
import Page from "../../atoms/Page";
import VinylImage from "../../../resources/images/vinyls.png";

const StyledButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;

const Container = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: -30px -30px 30px -30px;
  margin-bottom: 30px;
`;

const StyledHeroText = styled.h1`
  position: absolute;
  top: 50%;
  color: white;
  font-weight: bold;
`;

const StyledImage = styled.img`
  width: 100vw;
  height: 40vh;
  opacity: 0.75;
`;

const ButtonAction = () => {
  window.location.href = full_auth_url;
};

const Login = () => (
  <Page withNavigation={false} darkBackground={true}>
    <Container>
      <StyledImage src={VinylImage} />
      <StyledHeroText>Hey there! Sign in to see more.</StyledHeroText>
    </Container>

    <StyledButtonContainer>
      <NavLink to={"/login"}>
        <CTA action={ButtonAction}>Log in with Spotify</CTA>
      </NavLink>
    </StyledButtonContainer>
  </Page>
);

export default Login;
