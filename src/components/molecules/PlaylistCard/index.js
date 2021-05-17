import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #212121;
  width: 400px;
  height: 100px;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
`;

const StyledImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 10px 0px 0px 10px;
`;

const StyledTextContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  text-align; center;
`;

const PlaylistCard = ({ imageUrl, playlistName, action }) => {
  return (
    <Card onClick={action}>
      <StyledImage src={imageUrl} />
      <StyledTextContainer>
        <p>{playlistName}</p>
      </StyledTextContainer>
    </Card>
  );
};

export default PlaylistCard;
