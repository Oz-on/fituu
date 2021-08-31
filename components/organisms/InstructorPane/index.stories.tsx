import InstructorPane from ".";

export default {
  title: "Components/Organisms/InstructorPane",
  component: InstructorPane,
};

const Template = (args) => <InstructorPane {...args} />;

export const Default = Template.bind({});
Default.args = {
  fullName: "Janina Kowalska",
  type: "Trener Personalny",
  profileImageUrl: "https://gravatar.com/avatar/d496b8bf36092d7d0796cf0cb1de8b27",
}
