import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const IconContainer = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 45px;
  background-color: rgb(255, 255, 255, 0.5);
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const IconStyle = {
  color: "#fff",
  margin: "5px 5px 5px 5px",
  height: "20px",
  width: "20px",
};

const goBack = () => {
  window.history.back();
};

const BackButton = props => (
  <IconContainer onClick={goBack}>
    <FontAwesomeIcon icon={faArrowLeft} style={IconStyle} />
  </IconContainer>
);

export default BackButton;
