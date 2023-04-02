import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { full_auth_url } from "../../../config";
import CTA from "../../atoms/CTA";
import Page from "../../atoms/Page";
import VinylImage from "../../../resources/images/vinyls.png";
import SpotifyBanner from "../../../resources/images/SpotifyBanner.png";

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
  height: 70vh;
  opacity: 1;
`;

const ButtonAction = () => {
  console.log(full_auth_url)
  window.location.href = full_auth_url;
};

const locale = {
  welcomeText: "Hey there! Sign in to see more.",
  loginButton: 'Log in with Spotify',
};

const Login = () => (
  <Page withNavigation={false} darkBackground={true}>
    <Container>
      <StyledImage src={SpotifyBanner} />
      {/* <StyledHeroText>{locale.welcomeText}</StyledHeroText> */}
    </Container>

    <StyledButtonContainer>
      <NavLink to={"/login"}>
        <CTA action={ButtonAction}>{locale.loginButton}</CTA>
      </NavLink>
    </StyledButtonContainer>
  </Page>
);

export default Login;
