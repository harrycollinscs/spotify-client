import React from "react";
import Page from "./index";

export default {
  title: "Atoms/Page",
  component: Page,
  argTypes: {
    withNavigation: {
      options: [true, false],
      control: { type: "radio" },
    },
    darkBackground: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Page {...args} />;

export const Default = Template.bind({});

export const WithoutNavigation = Template.bind({});
WithoutNavigation.args = {
  withNavigation: false,
  children: "Child of the page",
};

export const WithDarkBackground = Template.bind({});
WithDarkBackground.args = {
  darkBackground: true,
  children: "Child of the page",
};
