import React from "react";
import CTA from "./index";

export default {
  title: "Atoms/CTA",
  component: CTA,
  argTypes: {
    action: {
      action: "clicked",
    },
    primary: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <CTA {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Click me!",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Click me!",
  primary: false,
};
