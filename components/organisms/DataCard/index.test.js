import DataCard from './';
const userData = {
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
  type: 'Trener Personalny'
};

it('should render DataCard component correctly', () => {
  const {getByText} = render(<DataCard userData={userData}/>);

  expect(getByText('Janina Kowalska')).toBeInTheDocument();
});
