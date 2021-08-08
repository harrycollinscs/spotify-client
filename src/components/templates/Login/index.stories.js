import React from "react";
import Login from "./index";

export default {
  title: "Templates/Login",
  component: Login,
};

const Template = (args) => <Login {...args} />;

export const Default = Template.bind({});
