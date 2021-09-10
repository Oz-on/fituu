import React from "react";
import Conversations from ".";

export default {
  title: "Components/Pages/Conversations",
  component: Conversations,
};

const Template = (args) => <Conversations {...args} />;

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
  ],
  conversations: [
    {
      id: 1,
      description: "opis conversacji",
      participants: [
        {
          id: 1,
          email: "john.doe@gmail.com",
          firstName: "John",
          lastName: "Doe",
          profilePhoto: {
            url: "",
            expiresIn: "",
          }
        },
        {
          id: 2,
          email: "jane.doe@gmail.com",
          firstName: "John",
          lastName: "Doe",
          profilePhoto: {
            url: "",
            expiresIn: "",
          }
        },
        {
          id: 3,
          email: "jan.koealski@gmail.com",
          firstName: "Jan",
          lastName: "Kowalski",
          profilePhoto: {
            url: "",
            expiresIn: "",
          }
        },
      ],
      lastMessage: {
        id: 1,
        content: "Test message",
        author: 1,
        timestamp: new Date().toString(),
        attachment: null,
      }
    },
    {
      id: 2,
      description: "opis conversacji",
      participants: [
        {
          id: 4,
          email: "tom.doe@gmail.com",
          firstName: "Tom",
          lastName: "Doe",
          profilePhoto: {
            url: "",
            expiresIn: "",
          }
        },
        {
          id: 5,
          email: "filip.doe@gmail.com",
          firstName: "Filip",
          lastName: "Doe",
          profilePhoto: {
            url: "",
            expiresIn: "",
          }
        },
        {
          id: 6,
          email: "egon.kowalski@gmail.com",
          firstName: "Egon",
          lastName: "Kowalski",
          profilePhoto: {
            url: "",
            expiresIn: "",
          }
        },
      ],
      lastMessage: {
        id: 1,
        content: "Test message",
        author: 1,
        timestamp: "2021-09-02T13:13:58.516Z",
        attachment: null,
      }
    }
  ],
  handleOpenConversation: () => {},
  handleRefreshConversation: () => {},
  handleCreateConversation: () => {},
};

export const Empty = Template.bind({});
Empty.args = {
  conversations: [],
};
