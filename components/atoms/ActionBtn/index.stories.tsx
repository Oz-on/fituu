import React from 'react';

import ActionButton from "./";

export default {
  component: ActionButton,
  title: "Components/Atoms/ActionBtn",
}

const Template = (args) => <ActionButton {...args} />
export const Default = Template.bind({});
Default.args = {
  children: "Action button",
  onClick: () => {},
};
