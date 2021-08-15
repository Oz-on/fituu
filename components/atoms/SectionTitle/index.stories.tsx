import React from "react";

import SectionTitle from "./";

export default {
  component: SectionTitle,
  title: "Components/Atoms/SectionTitle",
};

const Template = (args) => <SectionTitle {...args}/>

export const Default = Template.bind({});
Default.args = {
  children: "section title"
}
