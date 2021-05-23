import React from "react";
import styled from "styled-components";
import PlaylistCard from "../../molecules/PlaylistCard";
import ClipLoader from "react-spinners/ClipLoader";

const Container = styled.div`
  padding: 20px;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const PlaylistList = ({ playlists }) => {
  return (
    
    <Container>
        {playlists.map((playlist) => (
            <PlaylistCard playlist={playlist} />
        ))}
      {/* {true && <ClipLoader color={'blue'} loading={true} css={ true} size={20} />} */}
    </Container>
  );
};

export default PlaylistList;
