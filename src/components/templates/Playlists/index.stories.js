import React from "react";
import Playlists from "./index";

export default {
  title: "Templates/Playlists",
  component: Playlists,
};

const Template = (args) => <Playlists {...args} />;

export const Default = Template.bind({});
