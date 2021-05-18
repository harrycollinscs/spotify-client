import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background-color: #212121;
  width: 400px;
  height: 80px;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
`;

const StyledImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 5px 0px 0px 5px;
`;

const StyledTextContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  text-align; center;
`;

const PlaylistCard = ({ playlist }) => {
  const imageUrl = playlist.images[0] && playlist.images[0].url;
  const path = `/playlists/${playlist.id}`;

  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Card>
        <StyledImage src={imageUrl} />
        <StyledTextContainer>
          <p>{playlist.name}</p>
        </StyledTextContainer>
      </Card>
    </Link>
  );
};

export default PlaylistCard;
