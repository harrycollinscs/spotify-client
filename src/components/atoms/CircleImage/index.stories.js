import React from "react";
import CircleImage from "./index";

export default {
  title: "Atoms/CircleImage",
  component: CircleImage,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <CircleImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: "https://i.scdn.co/image/ab6761610000e5eb3ef779aa0d271adb2b6a3ded",
  size: "medium",
};



