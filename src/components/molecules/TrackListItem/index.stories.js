import React from "react";
import TrackListItem from "./index";
import TrackListItemData from "../../../__fixtures__/Track/TrackListItem/index.json";

export default {
  title: "Molecules/TrackListItem",
  component: TrackListItem,
};

const Template = (args) => <TrackListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...TrackListItemData
};
