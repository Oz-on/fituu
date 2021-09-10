import ModalTitle from ".";

it("should render ModalTitle component correctly", () => {
  const {getByText} = render(
    <ModalTitle>Modal Title</ModalTitle>
  );

  expect(getByText("Modal Title")).toBeInTheDocument();
});
