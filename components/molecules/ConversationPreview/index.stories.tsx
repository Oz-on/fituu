import React from "react";
import ConversationPreview from ".";

export default {
  title: "Components/Molecules/ConversationPreview",
  component: ConversationPreview,
};

const Template = (args) => <ConversationPreview {...args}/>;

export const Default = Template.bind({});
Default.args = {
  onClick: () => {},
  conversation: {
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
  }
};

export const WithOlderDate = Template.bind({});
WithOlderDate.args = {
  onClick: () => {},
  conversation: {
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
      timestamp: "2021-09-02T13:13:58.516Z",
      attachment: null,
    }
  }
};