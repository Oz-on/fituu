import { fireEvent } from "@testing-library/react";
import MessageInput from ".";

it("should display MessageInput component correctly", () => {
  const mockOnSendFunction = jest.fn();
  const {getByTestId} = render(
    <MessageInput onMessageSend={mockOnSendFunction}/>
  );

  expect(getByTestId("messageInput")).toBeInTheDocument();
});

it("should send message when text is entered", () => {
  const mockOnSendFunction = jest.fn();
  const {getByTestId} = render(
    <MessageInput onMessageSend={mockOnSendFunction}/>
  );

  const sendBtn = getByTestId("sendMsgBtn");
  const messageInput = getByTestId("messageInputField");

  fireEvent.click(sendBtn);
  expect(mockOnSendFunction).not.toHaveBeenCalled();

  fireEvent.change(messageInput, {target: {value: "Message"}});
  fireEvent.click(sendBtn);
  expect(mockOnSendFunction).toHaveBeenCalledWith("Message");
});
