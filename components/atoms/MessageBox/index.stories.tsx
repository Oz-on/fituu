import MessageBox from ".";

export default {
  title: "Components/Atoms/MessageBox",
  component: MessageBox,
};

const Template = (args) => <MessageBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Content of the message",
};
