import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircleImage from "../../atoms/CircleImage";
import store from "../../../store";

const StyledNavBar = styled.nav`
  width: 100%;
  padding: 10px;
  position: sticky;
  top: 0;
  background-color: #212121;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  z-index: 1000;
`;

const BrandAndLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BrandLogoContainer = styled.span`
  flex-direction: row;
  display: flex;
  padding: 10px 30px;
  align-items: center;
`;

const StyledBrand = styled.h2`
  color: white;
  align-self: center;
  font-weight: bold;
  margin: 5px
`;

const StyledNavLinks = styled.div`
  align-self: center;
  justify-content: space-between;
  margin: 0px 20px;
`;

const StyledListItem = styled.span`
  text-align: center;
  margin-right: 40px;
`;

const NavLinkActiveStyle = { 
  textDecoration: "none",
  color: "white" 
};

const NavLinkInactiveStyle = {
  textDecoration: 'none',
  color: '#b3b3b3',
}

const IconStyle = {
  color: '#1db954',
  margin: '5px',
  height: '25px',
  width: '25px',
};

const NavigationBar = ({ links, isLoggedIn }) => {

  return (
    <StyledNavBar>
      <BrandAndLinksContainer style={{display:'flex', flexDirection: 'row'}}>
      <Link to="/" style={{ textDecoration: 'none' }} >
        <BrandLogoContainer>
          <StyledBrand>Statify</StyledBrand>
          <FontAwesomeIcon icon={faCompactDisc} style={IconStyle}/>
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
      </BrandAndLinksContainer>
      { store.getState().user && <CircleImage style={{float:'right'}} url={store.getState().user.images[0].url}/>}
    </StyledNavBar>
  );
};

export default NavigationBar;
