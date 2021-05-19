import React from "react";
import styled from "styled-components";
import PlaylistCard from "../../molecules/PlaylistCard";
import ClipLoader from "react-spinners/ClipLoader";

const List = styled.ul`
  list-style: none;
  text-align: center;
  padding: 40px 0px;
`;

const PlaylistList = ({ playlists }) => {
  return (
    <>
      <List>
        {playlists.map((playlist) => (
          <li style={{ display: "inline-block", verticalAlign: "top" }}>
            <PlaylistCard playlist={playlist} />
          </li>
        ))}
      </List>
      {/* {true && <ClipLoader color={'blue'} loading={true} css={ true} size={20} />} */}
    </>
  );
};

export default PlaylistList;
