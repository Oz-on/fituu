import { fireEvent } from "@testing-library/react";
import ClientPicker from ".";

it("should render ClientPicker component correctly", () => {
  const mockOnSelect = jest.fn();
  const {getByText} = render(
    <ClientPicker
      onSelectClient={mockOnSelect}
      clients={[
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          profilePhoto: {
            url: 'https://gravatar.com/avatar/d496b8bf36092d7d0796cf0cb1de8b27'
          },
        },
        {
          id: 2,
          firstName: 'Jane',
          lastName: 'Kowalsky',
          profilePhoto: {
            url: ''
          },
        },
      ]}
    />
  );

  expect(getByText("John")).toBeInTheDocument();
  expect(getByText("Jane")).toBeInTheDocument();

  fireEvent.click(getByText("John"));
  expect(mockOnSelect).toHaveBeenCalled();
});
