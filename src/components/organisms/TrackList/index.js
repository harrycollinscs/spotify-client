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
            <TrackListItem track={track} />
          </li>
        ))
      }
    </List>
  );
};

export default TrackList;
