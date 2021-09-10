import React from "react";
import ClientPickerElement from ".";

export default {
  title: "Components/Molecules/ClientPickerElement",
  component: ClientPickerElement,
};

const Template = (args) => <ClientPickerElement {...args} />;

export const Default = Template.bind({});
Default.args = {
  firstName: "Jane",
  lastName: "Doe",
  profileImageUrl: "https://gravatar.com/avatar/d496b8bf36092d7d0796cf0cb1de8b27",
  onClick: () => {},
};
