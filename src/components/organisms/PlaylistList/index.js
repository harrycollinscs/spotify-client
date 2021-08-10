import React from "react";
import styled from "styled-components";
import PlaylistCard from "../../molecules/PlaylistCard";

const Container = styled.div`
  padding: 20px;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const PlaylistList = ({ playlists }) => (
  <Container>
    {playlists.map((playlist) => (
      <PlaylistCard playlist={playlist} />
    ))}
  </Container>
);

export default PlaylistList;
