import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  overflow-Y: scroll;
  height: 100vh;
  background-color: black;
  padding: 30px;
`;

const Page = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default Page;
