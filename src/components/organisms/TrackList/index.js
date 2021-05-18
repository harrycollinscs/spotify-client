import React from "react";
import styled from "styled-components";
import TrackListItem from "../../molecules/TrackListItem";

const List = styled.div`
  list-style: none;
`;

const TrackList = ({ tracks }) => {
  return (
    <List>
      {
        tracks.map(track => (
          <li>
            <TrackListItem name={track.name} artists={track.artists}/>
          </li>
        ))
      }
    </List>
  );
};

export default TrackList;
