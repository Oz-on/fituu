import React from 'react';

import ProfileImage from './';

export default {
  title: 'Components/Organisms/ProfileImage',
  component: ProfileImage,
};

const Template = (args) => <ProfileImage {...args} />;

export const Default = Template.bind({});
Default.args = {
 imgUrl: 'https://gravatar.com/avatar/d496b8bf36092d7d0796cf0cb1de8b27',
 inEditState: false,
 width: '80px',
 height: '80px',
};

export const InEditState = Template.bind({});
InEditState.args = {
  imgUrl: 'https://gravatar.com/avatar/d496b8bf36092d7d0796cf0cb1de8b27',
  inEditState: true,
  width: '80px',
  height: '80px',
  onClick: () => {console.log('click')},
};