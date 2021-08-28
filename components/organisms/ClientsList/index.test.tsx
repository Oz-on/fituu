import ClientsList from "./";

it('should display list of clients correctly given two clients in an array', () => {
  const {getByText} = render(
    <ClientsList clients={[
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        profilePhoto: {
          url: ''
        },
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        profilePhoto: {
          url: ''
        },
      },
      {
        id: 3,
        firstName: 'Jan',
        lastName: 'Kowalski',
        profilePhoto: {
          url: ''
        },
      },
    ]}/>
  );

  expect(getByText('John Doe')).toBeInTheDocument();
  expect(getByText('Jane Doe')).toBeInTheDocument();
  expect(getByText('Jan Kowalski')).toBeInTheDocument();
});

it('should render empty list of clients given empty list in props', () => {
  const {getByText} = render(<ClientsList clients={[]} />);

  expect(getByText('Brak klientów')).toBeInTheDocument();
});
