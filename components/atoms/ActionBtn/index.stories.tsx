import React from 'react';

import ActionButton from "./";

export default {
  component: ActionButton,
  title: "Components/Atoms/ActionBtn",
}

const Template = (args) => <ActionButton {...args} />
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Action button",
  onClick: () => {},
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  children: "Secondary button",
  onClick: () => {},
}
