import React from "react";
import ModalTitle from ".";

export default {
  title: "Components/Atoms/ModalTitle",
  component: ModalTitle,
};

const Template = (args) => <ModalTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Modal title"
}