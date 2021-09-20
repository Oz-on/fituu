import MessageBox from ".";

it("should renderMessageBox component Correctly", () => {
  const {getByText} = render(<MessageBox>Message</MessageBox>);

  expect(getByText("Message")).toBeInTheDocument();
});
