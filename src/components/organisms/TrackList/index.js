import React from "react";
import styled from "styled-components";
import TrackListItem from "../../molecules/TrackListItem";

const List = styled.div`
  list-style: none;
`;

const TrackList = ({ tracks, playlistId = null, albumId = null }) => (
  <List>
    {tracks.map((track, index) => (
      <li key={index}>
        <TrackListItem track={track} offset={index} playlistId={playlistId}/>
      </li>
    ))}
  </List>
);

export default TrackList;
