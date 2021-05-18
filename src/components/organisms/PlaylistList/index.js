import React from "react";
import styled from "styled-components";
import PlaylistCard from "../../molecules/PlaylistCard";

const List = styled.div`
  list-style: none;
`;

const PlaylistList = ({ playlists }) => {
  return (
    <List>
      {playlists.map((playlist) => (
        <li>
          <PlaylistCard playlist={playlist} />
        </li>
      ))}
    </List>
  );
};

export default PlaylistList;
