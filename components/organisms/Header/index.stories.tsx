import React from "react";

import Header from "./";

export default {
  component: Header,
  title: 'Components/Organisms/Header',
};


const Template = (args) => <Header {...args} />;

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  handleLogin: () => {},
  handleLogout: () => {},
  session: null,
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  handleLogin: () => {},
  handleLogout: () => {},
  session: {},
};

export const AlternativeHeader = Template.bind({});
AlternativeHeader.args = {
  handleLogin: () => {},
  handleLogout: () => {},
  session: null,
  alternative: true,
}