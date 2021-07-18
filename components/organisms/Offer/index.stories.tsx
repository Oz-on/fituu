import React from "react";

import Offer from "./";

export default {
  component: Offer,
  title: "Components/Organisms/Offer",
}

const Template = (args) => <Offer {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Offer 1",
  price: 300,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac finibus diam. Sed sollicitudin, enim ut dictum cursus, felis neque malesuada elit, non vehicula nisl magna sed ipsum. Suspendisse non ligula leo. Aliquam porttitor rutrum ligula id pellentesque.",
}