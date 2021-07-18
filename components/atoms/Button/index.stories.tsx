import React from "react";

import { Meta } from "@storybook/react";

import Button from "./";

export default {
  component: Button,
  title: "Components/Atoms/Button",
} as Meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
  primary: false,
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: "Link button",
  primary: true,
  isLink: true,
}