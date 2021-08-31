import { fireEvent } from "@testing-library/react";
import InstructorPane from ".";

it("should render InstructorPane component correctly", () => {
  const {getByText} = render(
    <InstructorPane
      type={"Trener Personalny"}
      fullName={"Jane Doe"}
      profileImageUrl={""}
      handleSendMessage={() =>{}}
    />
  );

  expect(getByText("Twój Trener Personalny")).toBeInTheDocument();
  expect(getByText("Jane Doe")).toBeInTheDocument();
});

it("should react on message button in InstructorPane component correctly", () => {
  const mockSendMessage = jest.fn();
  const {getByText} = render(
    <InstructorPane
      type={"Trener Personalny"}
      fullName={"Jane Doe"}
      profileImageUrl={""}
      handleSendMessage={mockSendMessage}
    />
  );

  fireEvent.click(getByText("Napisz wiadomość"));
  expect(mockSendMessage).toBeCalled();
});
