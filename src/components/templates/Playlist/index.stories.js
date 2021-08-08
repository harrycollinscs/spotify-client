import React from "react";
import Playlist from "./index";

export default {
  title: "Templates/Playlist",
  component: Playlist,
};

const Template = (args) => <Playlist {...args} />;

export const Default = Template.bind({});
Default.args = {
  match: {
    params: {
      id: "37i9dQZF1DWZixSclZdoFE",
    },
  },
};