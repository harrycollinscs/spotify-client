import React from "react";
import TrackList from "./index";
import TrackListData from "../../../__fixtures__/Tracks/index";

export default {
  title: "Organisms/TrackList",
  component: TrackList,
};

const Template = (args) => <TrackList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tracks: TrackListData,
};
