import { fireEvent } from "@testing-library/react";
import ClientPickerElement from ".";

it("should render ClientPickerElement correctly", () => {
  const mockClickFn = jest.fn();
  const {getByText} = render(
    <ClientPickerElement
      firstName={"Jane"}
      lastName={"Doe"}
      profileImageUrl={"https://gravatar.com/avatar/d496b8bf36092d7d0796cf0cb1de8b27"}
      onClick={mockClickFn}
    />
  );

  expect(getByText("Jane")).toBeInTheDocument();
  expect(getByText("Doe")).toBeInTheDocument();

  fireEvent.click(getByText("Jane"));
  expect(mockClickFn).toHaveBeenCalled();
});
