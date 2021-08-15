import { fireEvent } from '@testing-library/react';
import Button from './';

it('should display Button component when it is not a link', () => {
  const mockOnClick = jest.fn();
  const {getByText} = render(
    <Button
      type={'button'}
      primary={true}
      isLink={false}
      onClick={mockOnClick}>
      ActionBtn
    </Button>
  );

  const actionBtn = getByText("ActionBtn");
  fireEvent.click(actionBtn);

  expect(actionBtn).toBeVisible();
  expect(mockOnClick).toHaveBeenCalled();
});

it('should display Button component when it is a link', () => {
  const mockOnClick = jest.fn();
  const {getByText} = render(
    <Button
      primary={true}
      isLink={true}
      onClick={mockOnClick}>
      ActionBtn
    </Button>
  );

  const actionBtn = getByText("ActionBtn");

  expect(actionBtn).toBeVisible();
});