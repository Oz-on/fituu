import React from 'react';
import ClientsList from './';

export default {
  title: "Components/Organisms/ClientsList",
  component: ClientsList,
};

const Template = (args) => <ClientsList {...args} />;

export const Default = Template.bind({});
Default.args = {
  clients: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      profilePhoto: {
        url: ''
      },
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      profilePhoto: {
        url: ''
      },
    },
    {
      id: 3,
      firstName: 'Jane',
      lastName: 'Doe',
      profilePhoto: {
        url: ''
      },
    },
  ]
}