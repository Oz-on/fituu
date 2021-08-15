import EditIcon from './';

it('should render EditIcon component properly', () => {
  const {getByTestId} = render(<EditIcon />);

  expect(getByTestId('editIcon')).toBeVisible();
});
