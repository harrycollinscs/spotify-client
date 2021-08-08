import React from "react";
import Hero from "./index";

export default {
  title: "Molecules/Hero",
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "",
  content: "",
  withBackButton: false,
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: "Dummy title",
  content: "",
  withBackButton: false,
};

export const WithContent = Template.bind({});
WithContent.args = {
  title: "",
  content: "Here's some dummy content for the Hero component",
  withBackButton: false,
};

export const WithBackButton = Template.bind({});
WithBackButton.args = {
  title: "",
  content: "",
  withBackButton: true,
};
