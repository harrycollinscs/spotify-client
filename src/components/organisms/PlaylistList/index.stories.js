import React from "react";
import PlaylistList from "./index";
import PlaylistsData from "../../../__fixtures__/Playlists/index.json";

export default {
  title: "Organisms/PlaylistList",
  component: PlaylistList,
};

const Template = (args) => <PlaylistList {...args} />;

export const Default = Template.bind({});
Default.args = {
  playlists: PlaylistsData,
};
