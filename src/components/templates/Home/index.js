import React from "react";
import Page from "../../atoms/Page";
import Content from "../../atoms/Content";

const Home = ({ user }) => {
  return (
    <Page>
      <Content>{user ? <p>Hey, {user.id}!</p> : <p>Welcome back!</p>}</Content>
    </Page>
  );
};

export default Home;
