import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { full_auth_url } from "../../../config";
import CTA from "../../atoms/CTA";
import Page from "../../atoms/Page";

const StyledButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;

const ButtonAction = () => {
  window.location.href = full_auth_url;
}

const Login = props => (
  <Page>
    <StyledButtonContainer>
      <NavLink to={"/login"}>
        <CTA action={ButtonAction}>Log in with Spotify</CTA>
      </NavLink>
    </StyledButtonContainer>
  </Page>
);

export default Login;
