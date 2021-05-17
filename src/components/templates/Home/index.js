import React from "react";
import store from "../../../store";
import Page from "../../atoms/Page";

const Home = ({ isLoggedIn, user }) => {
  return (
    <Page>
      {
        user ? 
        <p>Hey user</p> :
        <p>Welcome back!</p>

      }
    </Page>
  );
};

export default Home;
