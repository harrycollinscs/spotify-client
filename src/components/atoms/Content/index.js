import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  padding: 30px 30px 30px 30px;
`;

const Content = ({ children }) => (
  <ContentContainer>
    {children}
  </ContentContainer>
);

export default Content;
