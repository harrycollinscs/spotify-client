import React from "react";
import Songs from "./index";
import TopTracksData from "../../../__fixtures__/Tracks/TopTracks/index"

export default {
  title: "Templates/Songs",
  component: Songs,
};

const Template = (args) => <Songs {...args} />;

export const Default = Template.bind({});
Default.args = {
  userTopTracks: TopTracksData,
};
