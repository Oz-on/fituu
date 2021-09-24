import MessageInput from ".";

export default {
  title: "Components/Molecules/MessageInput",
  component: MessageInput,
};

const Template = (args) => <MessageInput {...args}/>;

export const Default = Template.bind({});
Default.args = {
  onMessageSend: () => {},
};
