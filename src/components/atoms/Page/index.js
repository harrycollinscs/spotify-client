import React from "react";
import styled from "styled-components";
import NavigationBar from "../../molecules/NavBar";

const Container = styled.div`
  display; flex:
  flex-direction; row;
`;

const StyledDiv = styled.div`
  overflow-y: scroll;
  height: 100vh;
  width; 85vw;
  background-color: ${props => props.dark ? 'black' : 'white'};
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
  <Container>
    {withNavigation && <NavigationBar links={navigationLinks} />}
    <StyledDiv dark={darkBackground}>
      {children}
    </StyledDiv>
  </Container>
);

export default Page;
