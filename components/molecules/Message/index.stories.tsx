import Message from ".";

export default {
  title: "Components/Molecules/Message",
  component: Message,
};

const Template = (args) => <Message {...args}/>

export const OwnerMessage = Template.bind({});
OwnerMessage.args = {
  owner: true,
  content: "I am the owner",
  createDate: new Date().toString(),
  author: {
    id: 1,
    email: "john.doe@gmail.com",
    firstName: "John",
    lastName: "Doe",
    profilePhoto: {
      url: "",
      expiresIn: "",
    }
  },
};

export const OtherPersonMessage = Template.bind({});
OtherPersonMessage.args = {
  owner: false,
  content: "I am not the owner",
  createDate: new Date().toString(),
  author: {
    id: 1,
    email: "john.doe@gmail.com",
    firstName: "John",
    lastName: "Doe",
    profilePhoto: {
      url: "",
      expiresIn: "",
    }
  },
};
