import React from "react";
import ClientPicker from ".";

export default {
  title: "Components/Organisms/ClientPicker",
  component: ClientPicker,
};

const Template = (args) => <ClientPicker {...args}/>;

export const Default = Template.bind({});
Default.args = {
  onSelectClient: () => {},
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
};