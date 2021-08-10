import React from "react";
import Page from "../../atoms/Page";
import Hero from "../../molecules/Hero";

const locale = {
  preTitle: 'Hey',
  title: username => `Hey, ${username}`,
  content: 'Welcome back!'
}
const Home = ({ user }) => {
  return (
    <Page>
      <Hero
        title={user ? locale.title(user.id) : locale.preTitle}
        content={locale.content}
        withBackButton={false}
      />
      {/* <Content>{user ? <p>Hey, {user.id}!</p> : <p>Welcome back!</p>}</Content> */}
    </Page>
  );
};

export default Home;
