import React from 'react';

import ClientPreview from './';

export default {
  title: "Components/Molecules/ClientPreview",
  component: ClientPreview,
};

const Template = (args) => <ClientPreview {...args}/>;

export const Default = Template.bind({});
Default.args = {
  firstName: "John",
  lastName: "Doe",
  profilePhoto: {
    url: "",
  },
};
