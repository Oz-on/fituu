import React from "react";

import { Meta } from "@storybook/react";

import Chip from "./";

export default {
  component: Chip,
  title: "Components/Atoms/Chip",
} as Meta;

export const Primary: React.VFC<{}> = () => <Chip>Chip</Chip>;
