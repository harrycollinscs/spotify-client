import React from "react";
import styled from "styled-components";
import NavigationBar from "../../organisms/NavBar";

const StyledDiv = styled.div`
  overflow-y: scroll;
  margin-top: ${(props) => (props.withNavigation ? '8vh' : '0')};
  height: 100vh;
  width; 85vw;
  padding: 0px 0px 50px 0px;
  background-color: ${(props) => (props.dark ? "black" : "white")};
  position: relative;
`;

const navigationLinks = [
  {
    title: "Songs",
    route: "/songs",
  },
  {
    title: "Artists",
    route: "/artists",
  },
  {
    title: "Playlists",
    route: "/playlists",
  },
];

const Page = ({ children, withNavigation = true, darkBackground = false }) => (
  <StyledDiv dark={darkBackground} withNavigation={withNavigation}>
    {withNavigation && <NavigationBar links={navigationLinks} />}
    {children}
  </StyledDiv>
);

export default Page;
