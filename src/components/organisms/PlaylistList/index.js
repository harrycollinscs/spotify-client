import React from "react";
import styled from "styled-components";
import PlaylistCard from "../../molecules/PlaylistCard";

const List = styled.div`
  margin: 0px 20px;
  list-style: none;
`;

const PlaylistList = ({ playlists }) => {
  return (
    <List>
      {
        playlists.map(playlist => (
          <li>
            <PlaylistCard 
              imageUrl={playlist.images[0] && playlist.images[0].url}
              playlistName={playlist.name}
              action={() => console.log('hi')}  
            />
          </li>
        ))
      }
    </List>
  );
};

export default PlaylistList;
