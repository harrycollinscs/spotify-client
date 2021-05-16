import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  overflow-Y: scroll;
  margin: 30px;
`;

const Page = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default Page;
