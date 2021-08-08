import React from "react";
import Artists from "./index";

export default {
  title: "Templates/Artists",
  component: Artists,
};

const Template = (args) => <Artists {...args} />;

export const Default = Template.bind({});
