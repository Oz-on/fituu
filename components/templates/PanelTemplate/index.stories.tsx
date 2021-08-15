import React from "react";

import { Meta } from "@storybook/react";

import PanelTemplate from "./";

export default {
  component: PanelTemplate,
  title: "Components/Templates/PanelTemplate",
} as Meta;
const Template = (args) => (
  <PanelTemplate {...args}>
    <>
      <p>hello</p>
    </>
  </PanelTemplate>
);
export const Default = Template.bind({});
Default.args = {
  session: {},
}
