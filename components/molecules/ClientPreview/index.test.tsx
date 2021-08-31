import { fireEvent } from "@testing-library/react";
import ClientPreview from ".";

it('should render ClientPreview component correctly', () => {
  const {getByText} = render(
    <ClientPreview 
      id={1} 
      firstName={"John"} 
      lastName={"Doe"} 
      profilePhoto={{
        url: ""
      }}
      handleEditCalendar={() => {}}
      handleMessageClick={() => {}}
      handleRemoveClick={() => {}}
    />
  );

  expect(getByText("John Doe")).toBeInTheDocument();
});

it("should react on pressing buttons of ClientPreview component", () => {
  const mockEdit = jest.fn();
  const mockMessage = jest.fn();
  const mockRemove = jest.fn();

  const {getByTestId} = render(
    <ClientPreview 
      id={1} 
      firstName={"John"} 
      lastName={"Doe"} 
      profilePhoto={{
        url: ""
      }}
      handleEditCalendar={mockEdit}
      handleMessageClick={mockMessage}
      handleRemoveClick={mockRemove}
    />
  );

  fireEvent.click(getByTestId("editCallendarBtn"));
  expect(mockEdit).toHaveBeenCalled();

  fireEvent.click(getByTestId("messageClientBtn"));
  expect(mockMessage).toHaveBeenCalled();

  fireEvent.click(getByTestId("removeClientBtn"));
  expect(mockRemove).toHaveBeenCalled();
});

