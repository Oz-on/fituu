import React from "react";

import { Meta } from "@storybook/react";

import Footer from "./";

export default {
  component: Footer,
  title: "Components/Organisms/Footer",
} as Meta;
const Template = (args) => <Footer {...args} />;
export const Default = Template.bind({});
