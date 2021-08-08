import React from "react";
import Player from "./index";

export default {
  title: "Molecules/Player",
  component: Player,
};

const Template = (args) => <Player {...args} />;

export const Default = Template.bind({});
Default.args = {
  contextUri: "spotify:artist:6HQYnRM4OzToCYPpVBInuU",
};

