import React from "react";
import Page from "../../atoms/Page";

const Home = ({ user }) => {
  console.log(user)
  return (
    <Page>
      {
        user ? 
        <p>Hey, {user.id}!</p> :
        <p>Welcome back!</p>

      }
    </Page>
  );
};

export default Home;
