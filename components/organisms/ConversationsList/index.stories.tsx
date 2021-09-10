import React from "react";
import ConversationsList from ".";

export default {
  title: "Components/Organisms/ConversationsList",
  component: ConversationsList,
};

const Template = (args) => <ConversationsList {...args} />;

export const Default = Template.bind({});
Default.args = {
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
};

export const EmptyList = Template.bind({});
EmptyList.args = {
  conversations: [],
};
