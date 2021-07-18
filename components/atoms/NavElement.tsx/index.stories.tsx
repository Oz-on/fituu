import React from "react";

import NavElement from "./";

export default {
  component: NavElement,
  title: "Components/Atoms/NavElement"
};

const Template = (args) => <NavElement {...args} />

export const Default = Template.bind({});
Default.args = {
  description: "nav element",
  destination: "https://google.com",
  selected: false,
};


export const Selected = Template.bind({});
Selected.args = {
  description: "nav element",
  destination: "https://google.com",
  selected: true,
};
