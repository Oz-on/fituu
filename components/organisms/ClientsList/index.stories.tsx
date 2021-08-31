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
        url: 'https://gravatar.com/avatar/d496b8bf36092d7d0796cf0cb1de8b27'
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

export const EmptyList = Template.bind({});
EmptyList.args = {
  clients: [],
};

export const InLoadingState = Template.bind({});
InLoadingState.args = {
  clients: [],
  loading: true,
};