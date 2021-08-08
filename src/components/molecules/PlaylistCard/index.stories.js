import React from "react";
import PlaylistCard from "./index";
import PlaylistData from "../../../__fixtures__/Playlist/index.json";

export default {
  title: "Molecules/PlaylistCard",
  component: PlaylistCard,
};

const Template = (args) => <PlaylistCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  playlist: PlaylistData,
};

