import React from "react";

import StatsCard from ".";

export default {
  title: "Components/Organisms/StatsCard",
  component: StatsCard,
};

const Template = (args) => <StatsCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Liczba wyświetleń miesięcznie',
  value: 3650,
};