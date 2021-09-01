import ClientDashabord from "./";

export default {
  title: "Components/Pages/ClientDashboard",
  component: ClientDashabord,
}

const Template = (args) => <ClientDashabord {...args}/>;

export const Default = Template.bind({});
Default.args = {
  user: {
    firstName: 'Janina',
    lastName: 'Kowalska',
    city: 'Gryfino',
    tags: [
      {
        id: 1,
        title: 'Odchudzanie',
      }
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus at enim id sit at. Placerat pharetra sed ligula id quam aliquam aliquam. Eget in eget massa vitae diam nibh consequat facilisi posuere. Varius nunc tempus leo at sagittis elementum aliquam rhoncus. A laoreet amet risus risus. Arcu, in rhoncus, curabitur iaculis tincidunt cursus. Sed tellus dui volutpat velit. Nec amet egestas sit pulvinar at eu. Vehicula ultricies nunc, pharetra risus pulvinar diam id odio. Odio volutpat dignissim sagittis sit quam. Bibendum accumsan quis placerat.',
    type: 'Trener Personalny',
    profilePhoto: { 
      url: 'https://gravatar.com/avatar/d496b8bf36092d7d0796cf0cb1de8b27'
    },
  },
};
