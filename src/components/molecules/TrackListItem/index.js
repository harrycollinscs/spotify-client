import React from "react";
import styled from "styled-components";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { me_endpoint } from "../../../config";
import store from "../../../store";
import { playTrack } from "../../../api/songs";

const Item = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  margin: 5px;
`;

const Song = styled.p`
  padding: 0px;
  margin: 0px;
`;

const Artists = styled.p`
  padding: 0px;
  margin: 0px;
  color: grey;
`;

const Divider = styled.div`
  background-color: #eee;
  width: 100%;
  height: 1px;
`;

const ContentContainer = styled.div`
  margin-left: 10px;
`;

const StyledImage = styled.img`
  height: 50px;
  width: auto;
`;

const StyledImageOverlay = styled.div`
  height: 50px;
  width: 50px;
  background-color: black;
  opacity: 0;
  position: absolute;
  bottom: 0;
  transition: .5s ease;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  &:hover {
    background-color: black;
    opacity: 0.75;
  }
`;

const IconStyle = {
  color: "#fff",
  margin: "5px 5px 5px 5px",
  height: "20px",
  width: "20px",
};

const getTrack = (track) => {
  return track.track ? track.track : track;
};

const TrackListItem = ({ track, offset, playlistId = null, albumId = null }) => {
  const { name, artists, album } = getTrack(track);

  console.log(offset);

  const playPayload = {
    type: playlistId ? 'playlist' : 'album',
    id: playlistId ? playlistId : albumId,
    offset: offset
  };

  const allArtists = artists
    .map((artist) => {
      return artist.name;
    })
    .join(", ");

  return (
    <div>
      <Item>

      <div style={{position: 'relative'}}>
        <StyledImage src={album.images[0].url} />
        <StyledImageOverlay onClick={() => playTrack(playPayload)} >
          <FontAwesomeIcon icon={faPlay} style={IconStyle} />
        </StyledImageOverlay>
      </div>

        <ContentContainer>
          <Song>{name}</Song>
          <Artists>{allArtists}</Artists>
        </ContentContainer>
      </Item>
      <Divider />
    </div>
  );
};

export default TrackListItem;
