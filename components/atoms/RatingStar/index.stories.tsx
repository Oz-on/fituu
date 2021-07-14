import React from "react";

import { Meta } from "@storybook/react";

import RatingStar from "./";

export default {
  component: RatingStar,
  title: "Components/Atoms/RatingStar",
} as Meta;
const Template = (args) => <RatingStar {...args} />;
export const Default = Template.bind({});
Default.args = { rating: 5 };
