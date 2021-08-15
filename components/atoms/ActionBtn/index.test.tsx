import { fireEvent } from "@testing-library/react";
import ActionBtn from "./";

it('should render ActionBtn properly with a text', () => {
  const mockOnClick = jest.fn();
  const {getByText} = render(
    <ActionBtn 
      type={'button'} 
      onClick={mockOnClick}>
      ActionBtn
    </ActionBtn>
  );

  const actionBtn = getByText("ActionBtn");
  fireEvent.click(actionBtn);

  expect(actionBtn).toBeVisible();
  expect(mockOnClick).toHaveBeenCalled();
})