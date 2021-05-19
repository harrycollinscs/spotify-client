import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { playPlaylist } from "../../../api/playlists";
import GreenPlayButton from "../../atoms/GreenPlayButton";

const Card = styled.div`
  padding: 10px;
  background-color: rgba(33, 33, 33, 1.75);
  width: 200px;
  height: 300px;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const StyledTextContainer = styled.div`
  width: 100%;
  padding: 20px 10px;
  text-align: left;
`;

const StyledName = styled.p`
  font-weight: bold;
  margin: 0 0;
`;

const StyledOwner = styled.p`
  color: grey;
  margin: 0;
`;

const StyledPlayButtonOverlay = styled.div`
  height: 40px;
  width: 40px;
  margin: 10px;
  background-color: black;
  opacity: 0;
  border-radius: 45px;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: 0.5s ease;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: 1000;

  &:hover {
    opacity: 1;
    box-shadow: 0px 2px 2px 0px black;
  }
`;

const Container = styled.div`
  position: relative;
  &:hover ${StyledPlayButtonOverlay} {
    opacity: 1;
    box-shadow: 0px 2px 2px 0px black;
  }
`;

const PlaylistCard = ({ playlist }) => {
  const imageUrl = playlist.images[0] && playlist.images[0].url;
  const path = `/playlists/${playlist.id}`;

  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <Card>
        <Container>
          <StyledImage src={imageUrl} />
          <StyledPlayButtonOverlay>
            <GreenPlayButton action={() => playPlaylist(playlist.id)} />
          </StyledPlayButtonOverlay>
        </Container>
        <StyledTextContainer>
          <StyledName>{playlist.name}</StyledName>
          <StyledOwner>By {playlist.owner.display_name}</StyledOwner>
        </StyledTextContainer>
      </Card>
    </Link>
  );
};

export default PlaylistCard;
