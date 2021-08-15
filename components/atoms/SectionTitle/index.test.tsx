import SectionTitle from './';

it('should render SectionTitle component correctly', () => {
  const {getByText} = render(<SectionTitle>Title</SectionTitle>);

  expect(getByText('Title')).toBeInTheDocument();
});
