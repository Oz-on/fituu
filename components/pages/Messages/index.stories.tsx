import Messages from ".";

export default {
  title: "Components/Pages/Messages",
  component: Messages,
}

const Template = (args) => <Messages {...args} />

export const Default = Template.bind({});
Default.args = {
  onMessageSend: () => {},
  ownerId: 1,
  participants: {
    1: {
      id: 1,
      email: "oskar.doe@gmail.com",
      firstName: "John",
      lastName: "Doe",
      profilePhoto: {
        url: "",
        expiresIn: "",
      }
    },
    2: {
      id: 2,
      email: "john.doe@gmail.com",
      firstName: "John",
      lastName: "Doe",
      profilePhoto: {
        url: "",
        expiresIn: "",
      }
    }
  },
  messages: [
    {
      id: 1,
      content: "I am the owner",
      timestamp: new Date().toString(),
      author: 1,
      attachement: null,
    },
    {
      id: 2,
      content: "Are you?",
      timestamp: new Date().toString(),
      author: 2,
      attachement: null,
    }
  ],
}