import NewClientForm from "./";

export default {
  component: NewClientForm,
  title: "Components/Organisms/NewClientForm"
};

const Template = (args) => <NewClientForm {...args}/>;

export const Default = Template.bind({});
Default.args = {
  visible: true,
  handleAddClientClick: () => {},
  handleCancelClick: () => {},
};