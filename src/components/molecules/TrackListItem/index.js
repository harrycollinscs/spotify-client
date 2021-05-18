import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: row;
`;

const Song = styled.p`
  padding: 0px;
  margin: 10px 20px 10px 0px;
`;

const Artists = styled.p`
  padding: 0px;
  margin: 10px 20px 10px 0px;
  color: grey;
`;

const Divider = styled.div`
  background-color: #eee;
  width: 100%;
  height: 2px;
`;

const TrackListItem = ({ name, artists }) => {
  const allArtists = artists
    .map((artist) => {
      return artist.name;
    })
    .join(", ");

  return (
    <>
      <Item>
        <Song>{name}</Song>
        <Artists>{allArtists}</Artists>
      </Item>
      <Divider />
    </>
  );
};

export default TrackListItem;
