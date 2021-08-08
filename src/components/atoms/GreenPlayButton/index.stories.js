import React from "react";
import GreenPlayButton from "./index";

export default {
  title: "Atoms/GreenPlayButton",
  component: GreenPlayButton,
  argTypes: {
    action: {
      action: "clicked",
    },
  },
};

const Template = (args) => <GreenPlayButton {...args} />;

export const Primary = Template.bind({});
