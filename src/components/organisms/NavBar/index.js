import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircleImage from "../../atoms/CircleImage";
import store from "../../../store";

const StyledNavBar = styled.nav`
  width: 15vw;
  height: 100vh;
  padding: 20px 0px;
  float: left;
  background-color: #000;
  align-items: center;
  text-align: center;
  z-index: 1000;
`;

const BrandLogoContainer = styled.span`
  flex-direction: row;
  display: flex;
  align-items: center;
  text-align: left;
  align-content: center;
  padding: 10px;
`;

const StyledBrand = styled.h2`
  color: white;
  align-self: center;
  font-weight: bold;
  margin: 5px;
`;

const StyledNavLinks = styled.div`
  margin: 30px 0px;
  text-align: flex-start;
  padding: 0px;
`;

const StyledListItem = styled.div`
  text-align: left;
  margin: 5px 0px;
  padding: 0px 20px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;
  padding: 20px;
  width: 15vw;
`;

const NavLinkActiveStyle = {
  textDecoration: "none",
  fontWeight: "bold",
  color: "white",
};

const NavLinkInactiveStyle = {
  textDecoration: "none",
  color: "grey",
};

const IconStyle = {
  color: "#fff",
  margin: "5px",
  height: "25px",
  width: "25px",
};

const NavigationBar = ({ links }) => {
  const { user } = store.getState();

  return (
    <StyledNavBar>
      <Link to="/" style={{ textDecoration: "none" }}>
        <BrandLogoContainer>
          <StyledBrand>Reactify</StyledBrand>
          <FontAwesomeIcon icon={faCompactDisc} style={IconStyle} />
        </BrandLogoContainer>
      </Link>

      <StyledNavLinks>
        {links.map((link) => (
          <StyledListItem key={link.title}>
            <NavLink
              to={`${link.route}`}
              style={NavLinkInactiveStyle}
              activeStyle={NavLinkActiveStyle}
            >
              {link.title}
            </NavLink>
          </StyledListItem>
        ))}
      </StyledNavLinks>

      <IconContainer>
        {user && <CircleImage url={store.getState().user.images[0].url} />}
      </IconContainer>
    </StyledNavBar>
  );
};

export default NavigationBar;
