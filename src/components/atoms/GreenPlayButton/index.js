import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const IconContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background-color: rgb(29, 185, 84);
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const IconStyle = {
  color: "#fff",
  margin: "20px",
  height: "10px",
  width: "10px",
};

const GreenPlayButton = ({ action }) => (
  <IconContainer onClick={action}>
    <FontAwesomeIcon icon={faPlay} style={IconStyle} />
  </IconContainer>
);

export default GreenPlayButton;
