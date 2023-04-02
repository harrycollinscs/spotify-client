import React from "react";
import NavBar from "./index";

export default {
  title: "Organisms/NavBar",
  component: NavBar,
};

const Links = [
  {
    title: "Songs",
    route: "/songs",
  },
  {
    title: "Playlists",
    route: "/playlists",
  },
];

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: Links,
};
