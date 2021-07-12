import React from "react";

import { Meta } from "@storybook/react";

import Card from "./";

export default {
  component: Card,
  title: "Components/Organisms/Card",
} as Meta;
const Template = (args) => <Card {...args} />;
export const Default = Template.bind({});

Default.args = {
  avatar:
    "https://gravatar.com/avatar/1d771067547de28c013e4ecd5ef4f2e6?s=400&d=robohash&r=x",
  name: "Jan Kowalski",
  title: "Trener personalny",
  rating: 5,
  location: "Szczecin",
  categories: [
    { id: 1, name: "crossfit" },
    { id: 2, name: "odchudzanie" },
  ],
};
