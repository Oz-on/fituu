import React from "react";

import { Meta } from "@storybook/react";

import MainTemplate from "./";

export default {
  component: MainTemplate,
  title: "Components/Templates/MainTemplate",
} as Meta;
const Template = (args) => (
  <MainTemplate>
    <>
      <p>hello</p>
    </>
  </MainTemplate>
);
export const Default = Template.bind({});
